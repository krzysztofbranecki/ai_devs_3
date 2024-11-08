import {getDataFromCentral} from "@/utils/getDataFromCentral";
import {askQuestion} from "@/utils/askQuestion";
import {reportToCentral} from "@/utils/reportToCentral";

export async function POST(req: Request) {
    if (req.method !== "POST") {
        return Response.json({errorMessage: "Method Not Allowed"});
    }
    const text = await getDataFromCentral(`cenzura.txt`).then(response => response.text());

    const message =`
            We have the following text:
            ${text}
            Replace sensitive information in the text with the word CENZURA, also replace numbers and city, just the words that could identify this person. Do not change anything in the other words
            `
    const transformedText = await askQuestion({question:message}).then(async (answer) => {
        return answer;
    })
    const prompt = `
            We have the following text:
            ${transformedText}
            If the word CENZURA appears twice, replace it with just one word CENZURA. Return only transformed text.`

    const answer = await askQuestion({question:prompt}).then(async (answer) => {
        return answer;
    })
    const report = await reportToCentral({
        task: "CENZURA",
        answer: answer,
    }).then(response => response.json());
    if(report.code !== 0 ){
        console.warn('Wrong:');
    }else {
        console.log('Correct:');
    }
    console.log('Correct:', text);
    console.log('Answer:', answer);
    return Response.json({ report });
}

export const dynamic = "force-dynamic";
