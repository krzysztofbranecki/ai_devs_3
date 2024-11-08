export async function POST(req: Request) {
    if (req.method !== "POST") {
        return Response.json({errorMessage: "Method Not Allowed"});
    }
    const data = await req.json();
    console.log("Chatbase received POST request", data);
    return Response.json({status: "OK", data });
}

export const dynamic = "force-dynamic";
