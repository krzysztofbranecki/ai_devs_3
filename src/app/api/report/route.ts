import {getDataFromCentral} from "@/utils/getDataFromCentral";
import {reportToCentral} from "@/utils/reportToCentral";
import {askQuestion} from "@/utils/askQuestion";


export async function POST(req: Request) {
    if (req.method !== "POST") {
        return Response.json({errorMessage: "Method Not Allowed"});
    }
    let json = await getDataFromCentral(`json.txt`).then(response => response.json());

    const answers = await Promise.all(json['test-data'].map(async item => {
        const answer = eval(item.question);
        if(item.answer !== answer){
            item.answer = answer
        }
        if(item.test){
            const question = item.test.q;

            item.test.a = await askQuestion({question, context: "Write answer in as short as you can, without dots or other special characters"}).then(
                response => {
                    return response
                }
            );
        }
        return item
    }));
    json = {...json, 'test-data': answers, apikey: process.env.PERSONAL_API_KEY, };
    const report = await reportToCentral({
        task: "JSON",
        answer: json
    }).then(response => response.json());
    return Response.json(report);
}

export const dynamic = "force-dynamic";
