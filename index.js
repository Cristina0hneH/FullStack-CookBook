const express = require('express')
const cors = require('cors')
const app = express()
const data = require("./data.json")
const port = process.env.PORT || 3001;

app.use(cors());
console.log(data);

app.get("/recipes", (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Hello, welcome to port no. ${port}`)
})