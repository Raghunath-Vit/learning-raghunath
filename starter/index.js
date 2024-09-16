import {OpenAI} from "openai";
const OpenAiOb=new OpenAI();

async function main(){
  const response=await OpenAiOb.chat.completions.create({
    model:"gpt-4o-mini-2024-07-18",
    messages:[
        {
          role:"user",
          content: "what is average life span of Jharkhand?",
        },
    ],
  });
  console.log(response.choices[0].message.content);
}
main();