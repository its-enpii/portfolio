import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";
import OptimizeDatabase from "@/components/admin/OptimizeDatabase";

async function getProjects() {
  await dbConnect();
  // Plain JS objects for serialization
  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
  return projects.map((p) => ({
    ...p,
    _id: p._id.toString(),
    createdAt: p.createdAt.toISOString(),
  }));
}

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const projects = await getProjects();

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
          <div>
            <h1 className="text-3xl font-bold font-display text-gray-900">
              Project Dashboard
            </h1>
            <p className="text-gray-500">Manage your portfolio showcase</p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <OptimizeDatabase projects={projects} />
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-dark transition-colors shadow-lg justify-center flex-1 md:flex-none"
          >
            <Plus size={20} /> New Project
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-8 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">
                Project
              </th>
              <th className="px-8 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">
                Category
              </th>
              <th className="px-8 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider">
                Year
              </th>
              <th className="px-8 py-4 font-bold text-gray-500 uppercase text-xs tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {projects.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="px-8 py-12 text-center text-gray-400 italic"
                >
                  No projects found. Create one!
                </td>
              </tr>
            ) : (
              projects.map((project) => (
                <tr
                  key={project._id}
                  className="hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-12 rounded-lg bg-gray-200 overflow-hidden">
                        <img
                          src={project.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-bold text-gray-900">
                        {project.title}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 whitespace-nowrap">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-8 py-4 font-mono text-sm text-gray-500">
                    {project.year}
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={project.link}
                        target="_blank"
                        className="p-2 text-gray-400 hover:text-brand-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <Link
                        href={`/admin/projects/${project._id}`}
                        className="p-2 text-gray-400 hover:text-brand-accent transition-colors"
                      >
                        <Edit size={18} />
                      </Link>
                      <DeleteProjectButton id={project._id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
