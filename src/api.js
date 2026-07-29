//import Hugging face SDK
import {HfInference} from "@huggingface/inference"

//system prompt(just like instrunction to 
// system  to tell how to behave)

const SYSTEM_PROMPT = `You are an assistant that suggests recipes using some or all of a user's ingredients.
The recipe may include a few additional ingredients if needed, 
but keep extra ingredients to a minimum.
Format your response in Markdown so it is easy to display on a web page.`

//Create Hugging Face client from token

const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)


//export async function to get recipe from ingredient array

export async function getRecipeFromMistral(ingredientsArr)
{
//convert array to string
const ingredientString = ingredientsArr.join(", ")
  // Try Block of API call

  try {
    const response = await hf.chatCompletion
    (
        {
            model:"mistralai/Mistral-7B-Instruct-v0.3",
            messages:[
                { role: "system", content:SYSTEM_PROMPT},
                { role: "user" , content:`I have ${ ingredientString }
                                     Please suggest me Recipe `},
                    ],
           max_tokens:1024,

          
        }
    )
     return response.choices[0].message.content
     }

     //catch error
     catch(error)
     {console.error(error.message)

     }
}