const { mongoose } = require("mongoose");


function dbConnect(){
mongoose
  .connect("mongodb+srv://malisettyharish:tHuGYpj3fFexSfc1@cluster0-1.vngqo.mongodb.net/facebook")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => console.log(err));}

  module.exports={dbConnect}

  