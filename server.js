// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/marcusaburdine/vvv.git
// git push -u origin main

const express = require("express")
const app = express()
const PORT = 3000

const pokemon = require("./models/pokemon")

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

app.use(express.urlencoded({extended:false}))


app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App! ")
})

app.get("/pokemon", (req, res) => {
  res.render("Index", { pokemon: pokemon })
})

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/pokemon");
});

app.get("/pokemon/:id", (req, res) => {
  res.render("Show", pokemon[req.params.id]);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
}) 