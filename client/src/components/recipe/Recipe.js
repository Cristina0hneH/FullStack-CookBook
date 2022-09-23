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
    return (<div className='recipe'>{recipe &&
            <section>
                    {console.log(recipe)}
                    {<img className='recipe-img' src={recipe.fields?.picture[0].sys.url} />}
                    <h3 className='recipie-header'>{recipe.fields?.header}</h3>
                    {recipe.fields?.receiptText.content.map((content, i) => {
                        if (content.nodeType === "paragraph") {
                            return (<p className='recipe-info' key={recipe.sys.id + i} > {content.content[0].value} </p>);
                        }
                    })}
                </section>
            }
            </div>
    )
};

export default Recipe;