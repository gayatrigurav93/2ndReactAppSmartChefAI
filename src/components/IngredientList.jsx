export default function IngredientList(props){
     const ingredientsitems = props.ingredients.map( ingredients => (<li key ={ingredients}>{ingredients}</li>))
    return(
       <section>
                   <h2>Ingredients You Have:</h2>
                   <ul className="ingList">{ingredientsitems}</ul>

                { props.ingredients.length > 4 && <div className="get-recipe-container">
                       <div>
                        <h3>Ready to Cook?</h3>
                        <p>Let's Create Something Tasty!</p>                        
                       </div>

                       <button onClick={ () => props.getRecipe(props.ingredients)}>Create My Meal</button>
                </div>}
            </section> 
    )
}