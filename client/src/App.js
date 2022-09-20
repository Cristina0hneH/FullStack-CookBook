import axios from "axios";
import './App.css';
import { useState, useEffect } from "react";
import Home from './components/home/Home';
import Recipe from './components/recipe/Recipe';
import Navbar from "./components/navbar/Navbar";
import { Route,Routes } from "react-router-dom";
import {useNavigate} from "react-router-dom"


function App() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {

    axios.get('http://localhost:3001/recipes')
      .then((res) => {
        setRecipes(res.data)
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    < >
      <Navbar/>
      <Routes>
      <Route path ='/' element={<Home recipes={recipes}/>} />
      <Route path ='/recipe/:id' element={<Recipe />} />
      </Routes>
    </>
  );
}

export default App;
