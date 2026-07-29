import ReactMarkdown from "react-markdown"
export default function SmartRecipe(props){
    return(
        <section>
                <h2>Recommended Recipe :</h2>
                <ReactMarkdown> {props.recipe}</ReactMarkdown>   
                
            </section> 
    )
}