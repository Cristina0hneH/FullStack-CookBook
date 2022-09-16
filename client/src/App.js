import axios from "axios";
import './App.css';
import {useState, useEffect} from "react";


function App() {
  const [recipe, setRecipe] = useState([]); 
  useEffect(()=>{

    axios.get('http://localhost:3001/recipes')
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
