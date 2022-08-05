const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

const uri =
  "mongodb+srv://Hodal:1234@portfoliocruster.a2sjgu5.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Mongoose conected successfully!!");
  } catch (error) {
    console.log(error.message);
  }
}
connect();
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
