const express = require('express')
const app = express()
const data = require("./data.json")
const port = process.env.PORT || 3001; 

console.log(data);

app.listen(port, () => {
  console.log(`Hello, welcome to port no. ${port}`)
})