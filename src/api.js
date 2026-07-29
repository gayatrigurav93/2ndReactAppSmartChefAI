import OpenAI from "openai";

const client = new OpenAI({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
    dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `
You are a helpful cooking assistant.

Suggest a recipe using some or all of the user's ingredients.

You may include a few extra ingredients if necessary, but keep them to a minimum.

Format your response in Markdown.
`;

export async function getRecipeFromGroq(ingredientsArr) {
    const ingredientString = ingredientsArr.join(", ");

    try {
        const completion = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `I have these ingredients: ${ingredientString}. Please suggest one recipe.`
                }
            ],
            temperature: 0.7,
            max_tokens: 1024
        });

        return completion.choices[0].message.content;

    } catch (error) {
        console.error(error);

        return `
# Error

Unable to generate recipe.

Please try again.
`;
    }
}