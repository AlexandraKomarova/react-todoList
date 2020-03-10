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


const Todo = mongoose.model('todo', new mongoose.Schema(
  { name: 'string' }
  ));


app.post("/api/todoList", async(req, res) => {
  const todo = await Todo.create({name: req.body.name})
  res.json(todo); 
})



app.get("/api/todoList", async(req, res) =>{
  const todoList = await Todo.find({});
  res.json(todoList); 
})


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

