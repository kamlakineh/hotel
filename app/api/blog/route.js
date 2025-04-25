import prisma from "@/lib/generated/prisma"; // Adjust path to your generated Prisma client
import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/cloudinary";
import { deleteImages } from "@/lib/cloudinary";
export async function POST(req) {
  try {
    const formData = await req.formData();
    const image = formData.get("image");
    const titel = formData.get("titel ");
    const detail = formData.get("detail");
    const date = formData.get("date");

    if (!image || typeof image === "string") {
      throw new Error("Image upload failed");
    }
    const buffer = await image.arrayBuffer();
    const result = await uploadImage(Buffer.from(buffer));
    const blog = await prisma.blogs.create({
      data: {
        image: result.secure_url,
        titel: titel,
        detail: detail,
        date: date,
      },
    });
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
export async function GET() {
  try {
    const blog = await prisma.blogs.findMany();
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
export async function DELETE(req) {
  try {
    const body = await req.json();
    const { userId } = body;
    const entry = await prisma.blogs.findUnique({
      where: { id: userId },
      select: { image: true },
    });
    if (!entry) {
      return NextResponse.json({ error: "Entry not found" }, { status: 404 });
    }

    const images = [entry.image].filter(Boolean);
    await deleteImages(images);
    await prisma.blogs.delete({
      where: { id: userId },
    });

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
