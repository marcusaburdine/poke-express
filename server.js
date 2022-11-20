// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/marcusaburdine/vvv.git
// git push -u origin main

const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
   
    res.send("Welcome to the Pokemon App! ")
  })


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  }) 