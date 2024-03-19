import express from "express"

const router = express.Router();

// Health check
router.get("/healthcheck", (req, res) => {
  res.json({ message: "Server is running." });
});


//Get /todos
router.get("/todos",(req,res)=>{
    res.status(200).json({msg: "GET REQUEST to /api/todos"})
});

//Post /todos
router.post("/todos", (req, res) => {
  res.status(201).json({ msg: "POST REQUEST to /api/todos" });
});


//Delete /todos/:id
router.delete("/todos/:id", (req, res) => {
  res.status(200).json({ msg: "DELETE REQUEST to /api/todos/:id" });
});



//Put /todos/:id
router.put("/todos/:id", (req, res) => {
  res.status(200).json({ msg: "UPDATE REQUEST to /api/todos/:id" });
});


export default router;
