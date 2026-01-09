import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import { NextResponse } from "next/server";
import { auth } from "@/auth";

// GET a single project by ID
export async function GET(req, { params }) {
  await dbConnect();
  try {
    const { id } = await params;
    const project = await Project.findById(id);
    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// PUT (Update) a project
export async function PUT(req, { params }) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  try {
    const { id } = await params;
    const body = await req.json();
    const project = await Project.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!project) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: project });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

// DELETE a project
export async function DELETE(req, { params }) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();
  try {
    const { id } = await params;
    const deletedProject = await Project.deleteOne({ _id: id });
    if (!deletedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
