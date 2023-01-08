const express = require("express");
const SuccApp = require("../Schemas/WelcomeSchema");
let router = express.Router();
router
  .route("/GetAppData/username/:id/:address")
  .get((req, res) => {
    SuccApp.find({ user_name: req.params.id , address:req.params.address}).then((results) => {
      res.send(results);
    });
  });

router.route("/SendAppData").post((req, res) => {
  const Data = new SuccApp({
    section: "SuccApp",
    user_name: req.body.user_name,
    address: req.body.address,
    state: req.body.state,
    move_date: req.body.move_date,
    image: req.body.image
  });
  Data.save();
});

module.exports = router;
