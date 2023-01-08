const mongoose = require("mongoose")
const schema = mongoose.Schema
const aschema = new schema(
  {
    section: {
      type: String,
      required: false,
    },
    personal_full_legal_name: {
      type: String,
      required: false,
    },
    personal_dob: {
      type: String,
      required: false,
    },
    personal_mobile: {
      type: Number,
      required: false,
    },
    personal_phone: {
      type: Number,
      required: false,
    },
    personal_referee_name: {
      type: String,
      required: false,
    },
    personal_referee_phone_email: {
      type: String,
      required: false,
    },
    personal_referee_income_per_week: {
      type: Number,
      required: false,
    },
    current_employer_referee_name: {
      type: String,
      required: false,
    },
    current_employer_referee_phone_email: {
      type: String,
      required: false,
    },
    current_employer_referee_occupation: {
      type: String,
      required: false,
    },
    landlord_property_manager_name: {
      type: String,
      required: false,
    },
    landlord_property_manager_time_at_address: {
      type: String,
      required: false,
    },
    landlord_property_manager_reason_for_leaving: {
      type: String,
      required: false,
    },
    landlord_property_manager_phone_email: {
      type: String,
      required: false,
    },
    personal_email: {
      type: String,
      required: false,
    },
    personal_relationship: {
      type: String,
      required: false,
    },
    personal_occupation: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const AppDetails = mongoose.model("AppDetails", aschema);
module.exports = AppDetails;
