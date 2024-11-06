export async function getDataFromCentral(filename = '') {
    return await fetch(`${process.env.CENTRAL_URL}/data/${process.env.PERSONAL_API_KEY}/${filename}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    })
}
