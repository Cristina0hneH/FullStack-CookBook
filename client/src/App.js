import axios from "axios";
import './App.css';
import {useState, useEffect} from "react";
import Home from './components/home/Home';
import Recipe from './components/recipe/Recipe';


function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:3001/recipes')
      .then((res) => {
        setRecipes(res.data) 
      })
      .catch((err) => { console.log(err) })
  }, [])
  
  return (
    <div className="App">
      <Home recipes={recipes}/>
      <Recipe />

    </div>
  );
}

export default App;
