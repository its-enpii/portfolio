import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    const project = await Project.findById(id).select("image");

    if (!project || !project.image) {
      return new NextResponse("Image not found", { status: 404 });
    }

    // project.image is a Base64 string data:image/jpeg;base64,....
    // We need to parse it to serve as a real image file response
    const matches = project.image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (!matches || matches.length !== 3) {
      // Fallback if not valid base64 or raw string
      return new NextResponse("Invalid image data", { status: 500 });
    }

    const type = matches[1];
    const buffer = Buffer.from(matches[2], "base64");

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable", // Long cache for images
      },
    });
  } catch (error) {
    return new NextResponse("Error fetching image", { status: 500 });
  }
}
