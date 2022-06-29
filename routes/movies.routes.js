const router = require("express").Router();
const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

router.get("/", (req, res, next)=>{
    Movie.find()
    .then((peliculas)=>{
        res.render("../views/movies.hbs", {peliculas})
    })

})

router.get("/create",(req, res, next)=>{
    Celebrity.find()

    .then((celebrity)=>{
        res.render("../views/new-movie.hbs", {celebrity})
    })
    
})


router.post("/create",(req, res, next)=>{
   Movie.create(req.body)
   .then(()=>{
    res.redirect("/movie")
   })

   .catch(() =>{
    res.redirect("/movie/create")
  })
})

module.exports = router;