import {askQuestion} from "@/utils/askQuestion";
import {context} from "@/utils/context";


export async function POST(req: Request) {
    if (req.method !== "POST") {
        return Response.json({errorMessage: "Method Not Allowed"});
    }
    const apiKey = process.env.OPENAI_API_KEY ?? await req.headers.get("x-api-key") ?? undefined;

    const response = await fetch(`${process.env.COMPANY_URL}/verify`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/html',
            'cache-Control': 'no-cache, no-store, must-revalidate'
        },
        body: JSON.stringify({
            "text": "READY",
            "msgID": 0
        })
    }).then((response) => {
        return response.json()
    }).then(response => {
        const id = response.msgID;
        const question = response.text as string;
        return askQuestion({question, context, apiKey}).then(async (answer) => {
            return fetch(`${process.env.COMPANY_URL}/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    "text": `${answer}`,
                    "msgID": id,
                }),
            }).then(response => response.json())
                .then(response => ({...response, question: question, answer: answer}));
        })
    })
    return Response.json(response);
}

export const dynamic = "force-dynamic";
