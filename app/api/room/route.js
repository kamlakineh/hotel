import { NextResponse } from "next/server";
import { uploadImage } from "@/lib/cloudinary";
import prisma from "@/lib/generated/prisma"; // Adjust path to your generated Prisma client
import { deleteImages } from "@/lib/cloudinary";
export async function POST(request) {
  try {
    const formData = await request.formData();

    // Get form data fields
    const roomData = {
      number: formData.get("roomNumber"),
      type: formData.get("roomType"),
      roomfor: formData.get("roomFor"),
      detail: formData.get("roomDetail"),
      price: parseFloat(formData.get("roomPrice")),
      floor: parseInt(formData.get("roomFloor")),
    };

    // Get image files
    const imageFiles = [
      formData.get("roomImage1"),
      formData.get("roomImage2"),
      formData.get("roomImage3"),
    ];

    // Validate all fields
    if (Object.values(roomData).some((value) => !value)) {
      return NextResponse.json(
        { error: "All room fields are required" },
        { status: 400 }
      );
    }

    if (imageFiles.some((file) => !file)) {
      return NextResponse.json(
        { error: "All three images are required" },
        { status: 400 }
      );
    }

    // Upload images in parallel
    const uploadPromises = imageFiles.map(async (file) => {
      const buffer = await file.arrayBuffer();
      return uploadImage(Buffer.from(buffer));
    });

    const uploadedImages = await Promise.all(uploadPromises);

    // Create database entry
    await prisma.Entry.create({
      data: {
        roomNumber: roomData.number,
        roomType: roomData.type,
        roomFor: roomData.roomfor,
        roomDetail: roomData.detail,
        roomPrice: roomData.price,
        roomFloor: roomData.floor,
        roomImage1: uploadedImages[0].secure_url,
        roomImage2: uploadedImages[1].secure_url,
        roomImage3: uploadedImages[2].secure_url,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Room creation error:", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const entries = await prisma.entry.findMany();
    return new Response(JSON.stringify(entries), { status: 200 });
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
    const entry = await prisma.entry.findUnique({
      where: { id: userId },
      select: { roomImage1: true, roomImage2: true, roomImage3: true },
    });
    if (!entry) {
      return Responexportse.json({ error: "Entry not found" }, { status: 404 });
    }
    const images = [
      entry.roomImage1,
      entry.roomImage2,
      entry.roomImage3,
    ].filter(Boolean);
    await deleteImages(images);
    await prisma.entry.delete({ where: { id: userId } });
    return Response.json(
      { message: "Entry and images deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
