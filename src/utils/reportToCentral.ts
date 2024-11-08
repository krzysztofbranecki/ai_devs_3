interface IBody {
    task: string;
    answer: object;
}

export async function reportToCentral(body: IBody) {

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
