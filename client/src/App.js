import axios from "axios";
import './App.css';
import {useState, useEffect} from "react";
import Home from './components/home/Home';
import Recipe from './components/recipe/Recipe';
import { useState, useEffect } from "react";

function App() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:3001/recipes')
      .then((res) => {
        console.log(res)
        setRecipe(res.data.items)
      })
      .catch((err) => { console.log(err) })
  }, [])
  return (
    <div className="App">
      <Home />
      <Recipe />
      {
        console.log(recipe)

      }


    </div>
  );
}

export default App;
