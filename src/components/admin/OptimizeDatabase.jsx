"use client";

import { useState } from "react";
import { Zap, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { compressImage } from "@/utils/compressImage";
import { useRouter } from "next/navigation";

export default function OptimizeDatabase({ projects }) {
  const [optimizing, setOptimizing] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  const handleOptimize = async () => {
    if (
      !confirm(
        "This will download, compress, and re-upload ALL project images. This prevents slow loading times. Continue?"
      )
    )
      return;

    setOptimizing(true);
    setComplete(false);
    setProgress({ current: 0, total: projects.length });

    let count = 0;
    for (const project of projects) {
      count++;
      setProgress({ current: count, total: projects.length });

      try {
        // 1. Convert URL/Base64 to File object
        const response = await fetch(project.image);
        const blob = await response.blob();
        const file = new File([blob], "image.jpg", { type: "image/jpeg" });

        // 2. Compress
        const compressedBase64 = await compressImage(file);

        // 3. Skip if no saving (e.g. already small) - simplistic check by length
        // Base64 length comparison roughly indicates size
        if (compressedBase64.length >= project.image.length) {
          console.log(`Skipping ${project.title} - already optimized`);
          continue;
        }

        // 4. Update via API
        await fetch(`/api/projects/${project._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...project, image: compressedBase64 }),
        });
      } catch (error) {
        console.error(`Failed to optimize ${project.title}:`, error);
      }
    }

    setOptimizing(false);
    setComplete(true);
    setTimeout(() => {
      setComplete(false);
      router.refresh();
    }, 3000);
  };

  if (optimizing) {
    return (
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-xl font-bold border border-gray-200"
      >
        <Loader2 className="animate-spin" size={18} />
        Processing {progress.current}/{progress.total}
      </button>
    );
  }

  if (complete) {
    return (
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl font-bold border border-green-200"
      >
        <CheckCircle size={18} />
        Done!
      </button>
    );
  }

  return (
    <button
      onClick={handleOptimize}
      className="flex items-center gap-2 px-4 py-2 bg-white text-brand-accent hover:text-brand-primary hover:bg-brand-bg rounded-xl font-bold border border-brand-accent/20 hover:border-brand-primary/20 transition-all shadow-sm"
      title="Compress all images in database"
    >
      <Zap size={18} />
      <span className="hidden md:inline">Optimize DB</span>
    </button>
  );
}
