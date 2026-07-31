import React from "react"
import IngredientList from "./IngredientList"
import SmartRecipe from "./SmartRecipe"
import { getRecipeFromGroq } from "../api.js"


export default function Main(){
   // let consider initial state as empty array of ingredients
 
    const[ingredients,setIngredients] = React.useState([])
 // put ingredienyslist variable = map the array to list (inside ingeliat component)
 
 //now create function by action on form it gets new aray of list by adding new item
  function addIng(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
        const newItem = formData.get("ingredient") 
        setIngredients( prevIngr => [...prevIngr,newItem])
      event.currentTarget.reset();
    }

    //asume state whether reply from Api initial reply ""
    const[recipe,setRecipe] = React.useState("")

    // access recipe conatiner by useRef initial null
    const recipeContainer =  React.useRef(null)

    // for smooth scrolly use useEffect when there is recipe(i.e dependency array ) then scroll y

    React.useEffect(()=> {
        if(recipe !=="" && recipeContainer.current !==null){
         recipeContainer.current.scrollIntoView({behavior:"smooth"})   
        }
    },[recipe])


// on button click to get recipe,  Async function 
    async function getRecipe (ingredients){
    
 const recipeMakdown = await getRecipeFromGroq(ingredients)
// console.log("recipe markdown")
      setRecipe(recipeMakdown);
    }
    
 //when reply from api bolen true then only display recipe 
    
    return(
        <main>
            <form  className="add-ing-form" name="ingredient" onSubmit={addIng}>
                <input type="text" name="ingredient" placeholder="Enter ingredients"/>
                <button>Add ingredient</button>

            </form>
            { ingredients.length > 0 && <IngredientList
            ingredients = {ingredients}
            getRecipe ={getRecipe}
            />}

           { recipe && <SmartRecipe
           reciperef = {recipeContainer}
           recipe={recipe} />} 
        </main>
    )
}