import { sendEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const holedata = {
      fName: formData.get("fName"),
      email: formData.get("email"),
      address: formData.get("address"),
      coutery: formData.get("coutery"),
      numbers: formData.get("numbers"),
      numFamily: formData.get("numFamily"),
      rNumber: formData.get("rNumber"),
      checkIn: formData.get("checkIn"),
      checkOut: formData.get("checkOut"),
    };
    await prisma.custemer.create({
      data: {
        fName: holedata.fName,
        email: holedata.email,
        address: holedata.address,
        coutery: holedata.coutery,
        numbers: holedata.numbers,
        numFamily: holedata.numFamily,
        rNumber: holedata.rNumber,
        checkIn: holedata.checkIn,
        checkOut: holedata.checkOut,
      },
    });

    await sendEmail({
      to: holedata.email,
      subject: "Welcome to Our Hotel Booking!",
      html: `
              <h3>Hi ${holedata.fName},</h3>
              <p>🎉 You have successfully registered with us!</p>
              <p>We’re excited to have you on board.</p>
              <p>– The Hotel Team</p>
              <a href="http://localhost:3000/custem/${holedata.rNumber}">your page in here</a>
            `,
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
    const custemes = await prisma.custemer.findMany();
    const room = await prisma.Entry.findMany();
    return new Response(JSON.stringify({ custemes, room }), { status: 200 });
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

    await prisma.custemer.delete({
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
export async function PUT(req) {
  try {
    const body = await req.json();
    const { userid } = body;
    const accessvalu = await prisma.custemer.findUnique({
      where: { id: userid },
    });
    const mess = await prisma.custemer.update({
      where: { id: userid },
      data: {
        access: !accessvalu.access,
      },
    });
    return new Response(JSON.stringify(mess), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
