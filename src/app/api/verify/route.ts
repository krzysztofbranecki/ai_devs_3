

export async function POST() {
    const res = await fetch('https://poligon.aidevs.pl/dane.txt', {
        headers: {
            'Content-Type': 'text/html',
            'cache-Control': 'no-cache, no-store, must-revalidate'
        },
    }).then((response) => {
        return response.text()
    }).then(text => {
        const keysArray = text.replace(/\n/g, ' ').trim().split(" ");
        return fetch('https://poligon.aidevs.pl/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                "task": "POLIGON",
                "apikey": "546d8c57-7418-4cb0-b696-21dfdec4f52c",
                "answer": keysArray
            }),
        })
    }).then(response => response.json());
    return Response.json(res);
}

export const dynamic = "force-dynamic";
