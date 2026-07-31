import ReactMarkdown from "react-markdown"
export default function SmartRecipe({reciperef,recipe}){
    return(
        <section ref={reciperef}>
                <h2>Recommended Recipe :</h2>
                <ReactMarkdown>{recipe}</ReactMarkdown>   
                
            </section> 
    )
}