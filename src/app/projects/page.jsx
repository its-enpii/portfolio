import dbConnect from "@/lib/db";
export const dynamic = "force-dynamic";
import Project from "@/models/Project";
import ProjectShowcase from "@/components/ProjectShowcase";

async function getAllProjects() {
  await dbConnect();
  const projects = await Project.find({})
    .select("-image")
    .sort({ createdAt: -1 })
    .lean();
  return projects.map((p) => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt.toISOString(),
  }));
}

export default async function AllProjects() {
  const projects = await getAllProjects();

  return <ProjectShowcase projects={projects} />;
}
