export async function getDataFromCentral(filename = '') {
    const url = `${process.env.CENTRAL_URL}/data/${process.env.PERSONAL_API_KEY}/${filename}`;
    console.log(url)
    return await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
}
