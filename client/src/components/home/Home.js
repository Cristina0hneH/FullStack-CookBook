import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ recipes, recipesFilter }) => {
    const navigate= useNavigate();
    const filter = () => {
        if(recipesFilter) {
            return recipes.filter(recipe => recipe.fields.taste === recipesFilter);
        } 
        return recipes;
    }
    return (
        
        <div className="wrapper">{filter().map((recipe, id) => {
            return (
                <section key={id} className="recipe-cards">
                    {console.log(recipe)}
                    {<img className="image-food" src={recipe.fields?.picture[0].sys.url} />}
                    <h3>{recipe.fields?.header}</h3>
                    <button className="start-cooking" onClick={() => { navigate(`/recipes/${recipe.sys.id}`)}}>Start Cooking </button>

                </section>
            )
        })}
        </div>
    )
};

export default Home;




