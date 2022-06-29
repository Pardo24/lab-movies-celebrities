const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/", (req, res, next)=> {
    Celebrity
    .find()
    .then((result)=>{
        res.render("../views/celebrities.hbs", {result})
    })
})

router.get("/create", (req, res, next) => {
  res.render("../views/new-celebrity.hbs");
});

router.post("/create", (req, res, next) => {
  Celebrity.create(req.body)
  
  .then(() => {
    res.redirect("/celebrities")
  })
  .catch(() =>{
    res.redirect("/celebrities/create")
  })
});
module.exports = router;
