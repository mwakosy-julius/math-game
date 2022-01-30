const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 3000

app.use("/", async (req, res)=>{
  console.log("I love Games!");

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  };

  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const answer = num1 * num2;
  const userAnswer = req.body.number; 

  const viewData = {
    num1: num1,
    num2: num2,
    answer: answer,
  }

  res.render('index.ejs', viewData);

}); 


app.listen(port,()=>{
  console.log("i just started eating code!.");
});