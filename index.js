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

  let count = 0;
  let score = 0;
  let feedback = "Anser me!"
  const num1 = 0;
  const num2 = 0;
  const answer = num1 * num2;

  const userAnswer = req.body.number;

  if(userAnswer == answer){
    feedback  = "You got me right"
    score +=1;
  } else{
    feedback = "You got me wrong"
    }
  
  const viewData = {
    num1: num1,
    num2: num2,
    feedback: feedback,
  }
  res.render('index.ejs', viewData);
});


app.listen(port,()=>{
  console.log("i just started eating code!.");
});