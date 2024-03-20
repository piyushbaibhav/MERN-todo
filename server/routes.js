import express from "express"

const router = express.Router();

import { getConnectedClient } from "./database.js";

const getCollection = () => {
  const client = getConnectedClient();
  const collection = client.db("todosdb").collection("todos");
  return collection;
};


// Health check
router.get("/healthcheck", (req, res) => {
  res.json({ message: "Server is running." });
});


//Get /todos
router.get("/todos", async (req, res) => {
  const collection = getCollection();
  const todos = await collection.find({}).toArray();

  res.status(200).json(todos);
});



//Get by id /todos
router.get("/todos/:id",(req,res)=>{
    res.status(200).json({msg: "GET REQUEST to /api/todos/:id"})
});

//Post /todos
// POST /todos
router.post("/todos", async (req, res) => {
    const collection = getCollection();
    const { todo } = req.body;
  
    const newTodo = await collection.insertOne({ todo, status: false });
  
    res.status(201).json({ todo, status: false, _id: newTodo.insertedId });
  })


//Delete /todos/:id
router.delete("/todos/:id", (req, res) => {
  res.status(200).json({ msg: "DELETE REQUEST to /api/todos/:id" });
});



//Put /todos/:id
router.put("/todos/:id", (req, res) => {
  res.status(200).json({ msg: "UPDATE REQUEST to /api/todos/:id" });
});


export default router;
