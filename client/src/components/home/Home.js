import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ recipes }) => {
    const navigate= useNavigate();

    return (
        <>{recipes.map((recipe, id) => {
            return (
                <section key={id} className="recipe-cards">
                    {console.log(recipe)}
                    {<img src={recipe.fields.picture[0].sys.url} />}
                    <h3>{recipe.fields.header}</h3>
                    {recipe.fields.receiptText.content.map((content, i) => {
                        if (content.nodeType === "paragraph") {
                            return (<p key={recipe.sys.id + i}> {content.content[0].value} </p>);
                        }
                    })}
                    <button onClick={() => { navigate(`/recipes/${recipe.sys.id}`)}}>Start Cooking </button>

                </section>
            )
        })}
        </>
    )
};

export default Home;




