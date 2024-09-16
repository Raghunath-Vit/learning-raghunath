import OpenAI from "openai";
const openAI =new OpenAI();

async function genBasicImage(userInput:string){
  const response=await openAI.images.generate({
    prompt:"userInput",
    model:"dall-e-2",
    style:"vivid",
    size:"256x256",
    quality:"standard",
    n:1,
  });
  console.log(response);
}

process.stdin.addListener("data",async function (input){
  const userInput:any=input.toString().trim();
  await genBasicImage(userInput);
});