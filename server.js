// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/marcusaburdine/vvv.git
// git push -u origin main
require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const { default: mongoose } = require("mongoose")
const Pokemon = require("./models/pokemon")


console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())

app.use((req, res, next) => {
  next()
})

app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App! ")
})



app.get("/pokemon", (req, res) => {
  Pokemon.find({},(error, allPokemon) => {
    if (!error) {
      res.status(200).render("Index", {
        pokemon: allPokemon
      })
    } else {
      res.status(400).send(error)
    }
  })
})

app.get("/pokemon/new", (req, res) => {
  res.render("New");
});

app.post("/pokemon/", (req, res) => {
  Pokemon.create(req.body, (error, createdPokemon) => {
    if (!error) {
      res.status(200).redirect("pokemon")
    } else {
      res.status(400).send(error)
    }
  })
})

app.get("/pokemon/:id", (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    if (!error) {
      res.status(200).render("Show", {
          pokemon: foundPokemon
        })
    } else {
      res.status(400).send(error)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
}) 