import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ recipes }) => {
    const navigate= useNavigate();

    return (
        <div className="wrapper">{recipes.map((recipe, id) => {
            return (
                <section key={id} className="recipe-cards">
                    {console.log(recipe)}
                    {<img className="image-food" src={recipe.fields?.picture[0].sys.url} />}
                    <h3>{recipe.fields?.header}</h3>
                    <button onClick={() => { navigate(`/recipes/${recipe.sys.id}`)}}>Start Cooking </button>

                </section>
            )
        })}
        </div>
    )
};

export default Home;




