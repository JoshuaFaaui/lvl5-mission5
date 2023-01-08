const express = require('express')
const app = express()
const mongoose = require('mongoose')
const WelcomeData = require('./Schemas/WelcomeSchema')
const AppDetailsData = require('./Schemas/AppDetailsSchema')
const SuccAppData = require('./Schemas/SuccAppSchema')
const cors = require('cors')
const Welcome = require('./Routes/WelcomeRoutes')
const AppDetails = require('./Routes/AppDetailsRoutes')
const SuccApp = require('./Routes/SuccAppRoutes')
app.use(cors())
app.use(express.json())
mongoose.set("strictQuery", true)

const details = "mongodb://mongo:27017/mongo-dockerised";
const details2 = "mongodb+srv://Josh:HelloWorld@cluster0.csi3hib.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(details)
.then(() => {
  console.log('connected to database')
  
  app.use('/Welcome',Welcome)
  app.use('/AppDetails', AppDetails)
  app.use('/SuccApp',SuccApp)
  app.get("/deleter", (req, res) => {
    WelcomeData
      .deleteMany()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.get("/deleter2", (req, res) => {
    AppDetailsData.deleteMany()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });

  app.get("/deleter3", (req, res) => {
    SuccAppData.deleteMany()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  app.listen(3001);
})
.catch((err)=>{console.log(err)})
