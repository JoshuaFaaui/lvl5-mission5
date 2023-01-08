const express = require("express")
const Welcome = require('../Schemas/WelcomeSchema')
let router = express.Router()
router
    .route("/Get/StatesForAppliedApplications/username/:id")
    .get((req, res) => {
        Welcome.find({user_name:req.params.id}).then((results) => {
         res.send(results);
        });
    });

router
    .route("/Send/StatesForAppliedApplications")
    .post((req, res) => {
      const Data = new Welcome({
        section:"Welcome",
        user_name: req.body.d1,
        address: req.body.d2,
        state: req.body.d3,
        move_date: req.body.d4,
        image: req.body.d5
      });
      Data.save()
    })

module.exports = router