const express = require("express"); 
const path = require("path"); 
const app = express(); 

const mongoose = require("mongoose"); 
const PORT = process.env.PORT || 3001; 

//MIddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-todoList",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

app.get("/api/todoList", (req, res) =>{
  res.send("hello world")
})


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

