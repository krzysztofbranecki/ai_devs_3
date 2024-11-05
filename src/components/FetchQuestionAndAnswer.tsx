'use client'
import {useState} from "react";
export const FetchQuestionAndAnswer = ({showInput= true}) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [apiKey, setApiKey] = useState("");
    const getQuestionAndAnswer = async () => {
        return fetch('api/verify-robots', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'x-api-key': apiKey,
            }
        })
    };
    return (
        <div className="flex flex-col gap-5 text-center">
            {showInput && <label className="text-sm sm:text-base text-white">
                <span className="ml-2">API Key:</span>
                <input className="text-sm sm:text-base text-black" value={apiKey} onChange={e => setApiKey(e.target.value)}/>
            </label>}
            <button
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                onClick={() => {
                    getQuestionAndAnswer().then(response => {
                        return response.json();
                    }).then(data => {
                        const {question, answer} = data;
                        setQuestion(question);
                        setAnswer(answer);
                    })
                }}
            >
                Get Question and Answer
            </button>
            <div className="text-sm sm:text-base text-white">
                {question}
            </div>
            <div className="text-sm sm:text-base text-white">
                {answer}
            </div>
        </div>
    )
}
