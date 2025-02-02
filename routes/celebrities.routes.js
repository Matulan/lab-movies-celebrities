const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here


router.get("/celebrities/create", (req, res, next) => {
    res.render("celebrities/new-celebrity");
  });

  router.post('/celebrities/create', (req, res, next) => {
    const {name, occupation, catchPhrase} = req.body;

    Celebrity.create({name, occupation, catchPhrase})
    .then(() => res.redirect('/celebrities'))
    .catch(error => next(error));
  });

  
  router.get("/celebrities", (req, res, next) => {

    Celebrity.find()
    .then((allCelebrities) => {
    res.render("celebrities/celebrities", {allCelebrities})})
    .catch(error => next(error));
    });

  module.exports = router;