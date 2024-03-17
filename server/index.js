import express from "express";

const app = express();

app.get("/hello",(req,res)=>{
    res.status(200).json({msg:"hello people"})
});

const port = 5000;
app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`);
})