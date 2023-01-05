const express = require('express')
const app = express()
const mongoose = require('mongoose')
const data = require('./structure')
const cors = require('cors')
app.use(cors())
app.use(express.json())
mongoose.set("strictQuery", true)

const details = "mongodb://mongo:27017/mongo-dockerised";
const details2 = "mongodb+srv://Josh:HelloWorld@cluster0.csi3hib.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(details2)
.then(() => {
    console.log('connected to database')

    app.get("/", (req, res) => {
      data.find().then((results) => {
        res.send(results);
      });
    });

    app.post("/data", (req, res) => {
      const Data = new data({
        group: req.body.d1,
        quote: req.body.d2,
      });
      Data.save();
    });

    app.get("/deleter", (req, res) => {
      data
        .deleteMany()
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
