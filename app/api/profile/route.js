import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/cloudinary";
import prisma from "@/lib/generated/prisma"; // Adjust path to your generated Prisma client

import { deleteImages } from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const profileData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };
    const imageFiles = formData.get("image");

    if (Object.values(profileData).some((value) => !value)) {
      return NextResponse.json(
        { error: "All profile fields are required" },
        { status: 400 }
      );
    }
    if (!imageFiles) {
      return NextResponse.json(
        { error: "Profile image is required" },
        { status: 400 }
      );
    }

    const buffer = await imageFiles.arrayBuffer();
    const result = await uploadImage(Buffer.from(buffer));

    await prisma.Profileadmin.create({
      data: {
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
        password: profileData.password,
        image: result.secure_url,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Profile creation error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const formData = await request.formData();
    const profileData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };
    const imageFiles = formData.get("image");

    if (Object.values(profileData).some((value) => !value)) {
      return NextResponse.json(
        { error: "All profile fields are required" },
        { status: 400 }
      );
    }
    if (!(imageFiles instanceof File)) {
      return NextResponse.json(
        { error: "Invalid or missing profile image" },
        { status: 400 }
      );
    }
    const deletimg = await prisma.Profileadmin.findUnique({
      where: { email: profileData.email },
      select: { image: true },
    });
    const images = [deletimg.image].filter(Boolean);
    await deleteImages(images);
    const buffer = await imageFiles.arrayBuffer();
    const result = await uploadImage(Buffer.from(buffer));

    const existing = await prisma.Profileadmin.findUnique({
      where: { email: profileData.email },
    });

    if (!existing) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    await prisma.Profileadmin.update({
      where: { email: profileData.email },
      data: {
        name: profileData.name,
        email: profileData.email,
        phone: profileData.phone,
        password: profileData.password,
        image: result.secure_url,
      },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Profile creation error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const entries = await prisma.Profileadmin.findMany();
    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
