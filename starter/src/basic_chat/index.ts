console.log(process.env.OPENAI_API_KEY);
import OpenAI from "openai";
const openai=new OpenAI();

process.stdin.addListener("data",async function(input){
  const userInput=input.toString().trim();
  console.log(userInput);
})