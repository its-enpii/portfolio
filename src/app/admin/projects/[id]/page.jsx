import ProjectForm from "@/components/admin/ProjectForm";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import { notFound } from "next/navigation";

// Fetch project data for server component
async function getProject(id) {
  await dbConnect();
  const project = await Project.findById(id).lean();
  if (!project) return null;
  return {
    ...project,
    _id: project._id.toString(),
    createdAt: project.createdAt?.toISOString(),
    updatedAt: project.updatedAt?.toISOString(),
  };
}

export default async function EditProjectPage(props) {
  const params = await props.params;
  const project = await getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-display text-gray-900">
          Edit Project
        </h1>
        <p className="text-gray-500">Update project details</p>
      </div>
      <ProjectForm project={project} />
    </div>
  );
}
