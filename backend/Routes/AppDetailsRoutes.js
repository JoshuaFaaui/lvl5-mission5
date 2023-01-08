const express = require("express");
const AppDetails = require('../Schemas/AppDetailsSchema');
let router = express.Router()

router
    .route('/GetData')
    .get((req, res) => {
        AppDetails.find()
        .then(results=>res.send(results))
    })

router
    .route('/SendData')
    .post((req, res) => {
        const Data = new AppDetails({
          section: "AppDetails",
          personal_full_legal_name: req.body.q2,
          personal_dob: req.body.q3,
          personal_mobile: req.body.q4,
          personal_phone: req.body.q5,
          personal_referee_name: req.body.q6,
          personal_referee_phone_email: req.body.q7,
          personal_referee_income_per_week:req.body.q8,
          current_employer_referee_name:req.body.q9,
          current_employer_referee_phone_email:req.body.q10,
          current_employer_referee_occupation:req.body.q11,
          landlord_property_manager_name:req.body.q12,
          landlord_property_manager_time_at_address:req.body.q13,
          landlord_property_manager_reason_for_leaving:req.body.q14,
          landlord_property_manager_phone_email:req.body.q15,
          personal_email:req.body.q16,
          personal_relationship:req.body.q17,
          personal_occupation:req.body.q18
        })
        Data.save()
    })
module.exports = router