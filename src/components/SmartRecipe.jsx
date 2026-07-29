import ReactMarkdown from "react-markdown"
export default function SmartRecipe({recipe}){
    return(
        <section>
                <h2>Recommended Recipe :</h2>
                <ReactMarkdown>{recipe}</ReactMarkdown>   
                
            </section> 
    )
}