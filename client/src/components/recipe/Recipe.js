import { useState, useEffect } from 'react';
import axios from 'axios';
import './recipe.css';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Recipe = () => {
    const navigate= useNavigate();
    const [recipe, setRecipe] = useState([]);
    const {id} = useParams()


    useEffect(() => {

      axios.get(`http://localhost:3001/recipes/${id}`)
        .then((res) => {
          setRecipe(res.data)
        })
        .catch((err) => { console.log(err) })
    }, [])
    return (<div>{recipe &&
         <section className="recipe-cards">
                    {console.log(recipe)}
                    {<img src={recipe.fields?.picture[0].sys.url} />}
                    <h3>{recipe.fields?.header}</h3>
                    {recipe.fields?.receiptText.content.map((content, i) => {
                        if (content.nodeType === "paragraph") {
                            return (<p key={recipe.sys.id + i}> {content.content[0].value} </p>);
                        }
                    })}
                </section>
            }
            </div>
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