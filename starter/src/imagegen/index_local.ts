import OpenAI from "openai";
import { writeFileSync } from "fs";
const openAI=new OpenAI();

async function genBasicImageLocal(userInput:string)
{
  const response=await openAI.images.generate({
    prompt: userInput,
    model:"dall-e-2",
    style:"vivid",
    size:"256x256",
    quality:"standard",
    n:1,
    response_format:"b64_json",
  });
  const rawImageResponse=response.data[0].b64_json;
  if(rawImageResponse)
  {
    console.log("saving Image");
    writeFileSync("genImg.png",Buffer.from(rawImageResponse,"base64"));
  }
  console.log(response);
}

process.stdin.addListener("data",async function(input){
  const userInput:any=input.toString().trim();
  await genBasicImageLocal(userInput);
});