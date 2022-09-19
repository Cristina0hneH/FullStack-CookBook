const express = require('express')
const cors = require('cors')
const app = express()
const data = require("./data.json")
const port = process.env.PORT || 3001; 
const cors = require("cors");

app.use(cors());
app.get('/recipes', (req, res) => {
  res.json(data.items)
})

app.get('/recipes/:id', (req, res) => {

const  id = req.params.id;
  //find() returns only one object, it stops after finsinf the irst one. filter() returns an array with multiple results
  //this will be replaced with a db call later
  const recipe = data.items.find((recipe) =>{
    return recipe.sys.id === id;
  })
  res.json(recipe)
})
const port = process.env.PORT || 3001;

app.use(cors());
console.log(data);


app.get("/recipes", (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Hello, welcome to port no. ${port}`)
})
