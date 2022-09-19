import './home.css';

const Home = ({recipes})=>{
    
    return(
        <>{recipes.map((recipe, id)=>{
            return(
            <section key={id} className="recipe-cards">
                {console.log(recipe)}
                {/*picture-Ben */}
                <h3>{recipe.fields.header}</h3>
                <button>Start Cooking</button>
            </section>
        )})}
        </>
    )
};

export default Home;




{/*   */}