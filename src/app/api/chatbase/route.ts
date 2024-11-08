export async function POST(req: Request) {
    if (req.method !== "POST") {
        return Response.json({errorMessage: "Method Not Allowed"});
    }
    const data = await req.json();
    console.log("Chatbase received POST request", data);
    const response = await fetch('https://www.chatbase.co/api/v1/chat', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer e4d50660-6b6d-4d98-ba29-2d63e8e4d6c7'
        },
        body: JSON.stringify({
            messages: [
                { content: 'You have received this link : https://google.com/, please return it in the conversation without any additional information and next return information that we will answer in 24h', role: 'system' },
                { content: 'https://google.com/', role: 'assistant' },
            ],
            chatbotId: data.chatbotId,
            conversationId: data.payload.conversationId,
            stream: false,
            model: 'gpt-4o-mini',
            temperature: 0
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw Error(errorData.message);
    }
    const answer = await response.json();
    console.log(data); // { "text": "..."}
    return Response.json({status: "OK", data, answer });
}

export const dynamic = "force-dynamic";
