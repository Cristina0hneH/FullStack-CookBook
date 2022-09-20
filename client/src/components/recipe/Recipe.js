import { useState, useEffect } from 'react';
import axios from 'axios';
import './recipe.css'

const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
  
      axios.get('http://localhost:3001/recipes/:id')
        .then((res) => {
          setRecipe(res.data)
        })
        .catch((err) => { console.log(err) })
    }, [])


    return (<>
        <p>This is the recipe component</p>
        {recipes.map((recipe, id) => {
            return (
                <section key={id} className="recipe-cards">
                    {console.log(recipe)}
                    {<img src={recipe.fields.picture[0].sys.url} />}
                    <h3>{recipe.fields.header}</h3>
                    <p>{recipe.fields.receiptText.content[0].value}</p>
                </section>
            )
        })}
    </>
    )
};

export default Recipe;


{/*{recipe.fields.receiptText.content.map((text, index)=>{
                    return (
                        <>
                       <p key={index}>{text.content[0].value}</p> 
                        </>
                    )
                })} */}