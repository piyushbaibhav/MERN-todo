import express from "express"

const router = express.Router();

// Health check
router.get("/healthcheck", (req, res) => {
  res.json({ message: "Server is running." });
});


//Get /todos
router.get("/tasks",(req,res)=>{
    res.status(200).json({msg: "GET REQUEST to /api/todos"})
});
//Get specific /todos
router.get("/tasks/:id",(req,res)=>{
    res.status(200).json({msg: "GET REQUEST to /api/todos/:id"})
});

//Post /todos
router.post("/post", (req, res) => {
  res.status(201).json({ msg: "POST REQUEST to /api/todos" });
});


//Delete /todos/:id
router.delete("/post/:id", (req, res) => {
  res.status(200).json({ msg: "DELETE REQUEST to /api/todos/:id" });
});



//Put /todos/:id
router.put("/post/:id", (req, res) => {
  res.status(200).json({ msg: "UPDATE REQUEST to /api/todos/:id" });
});


export default router;
