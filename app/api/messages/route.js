import prisma from "@/lib/generated/prisma"; // Adjust path to your generated Prisma client

export async function POST(req) {
  try {
    const body = await req.json();
    const { content, custemerId, employId, from, dates, times } = body;
    const mess = await prisma.chatMessage.create({
      data: {
        content: content,
        employId: employId,
        custemerId: custemerId,
        from: from,
        times: times,
        dates: dates,
      },
    });
    return new Response(JSON.stringify(mess), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const mess = await prisma.chatMessage.findMany();
    return new Response(JSON.stringify(mess), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
