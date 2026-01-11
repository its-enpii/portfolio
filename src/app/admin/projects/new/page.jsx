import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-display text-gray-900">
          Add New Project
        </h1>
        <p className="text-gray-500">Showcase your latest work</p>
      </div>
      <ProjectForm />
    </div>
  );
}
