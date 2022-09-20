import './home.css';

const Home = ({ recipes }) => {

    return (
        <>{recipes.map((recipe, id) => {
            return (
                <section key={id} className="recipe-cards">
                    {console.log(recipe)}
                    {<img src={recipe.fields.picture[0].sys.url} />}
                    <h3>{recipe.fields.header}</h3>
                    
                    <button>Start Cooking</button>
                </section>
            )
        })}
        </>
    )
};

export default Home;




