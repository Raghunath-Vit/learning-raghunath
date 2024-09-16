import OpenAI from "openai";
const openAI=new OpenAI();
function getTimeOfDay(){
  return new Date().toLocaleString();
}

async function callOpenAIWithTools(){
  const context:OpenAI.Chat.ChatCompletionMessageParam[]=[
    {
      role:"system",
      content:"You are a helpful assistant that gives information about the times of the day",
    },
    {
      role:"user",
      content:"if its noon, can i have mu lunch",
    },
  ];


  const response=await openAI.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:context,
    tools:[
      {
        type:"function",
        function:{
          name:"getTimeOfDay",
          description:"Get the Time of the day",
        },
      },
    ],
    tool_choice:"auto",
  });

  const willInvokeFunction=response.choices[0].finish_reason=="tool_calls";
  const toolCall=response.choices[0].message.tool_calls![0];
 if(willInvokeFunction){
  const toolName=toolCall.function.name;
 
  if(toolName=="getTimeOfDay")
  {
    const toolResponse=getTimeOfDay();
    context.push(response.choices[0].message);
    context.push({
      role:"tool",
      content:toolResponse,
      tool_call_id:toolCall.id,
    });
  }
}
const secondResponse=await openAI.chat.completions.create({
  model:"gpt-3.5-turbo",
  messages:context,
});
console.log(secondResponse.choices[0].message.content);
}
callOpenAIWithTools();