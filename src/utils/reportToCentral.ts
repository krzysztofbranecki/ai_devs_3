export async function reportToCentral(body: { task: string; answer: string | null | void }) {

    return await fetch(`${process.env.CENTRAL_URL}/report`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            ...body,
            apikey: process.env.PERSONAL_API_KEY,
        }),
    })
}
