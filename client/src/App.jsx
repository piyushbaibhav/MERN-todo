
import React,{useEffect} from "react"

export default function App() {
  
  useEffect(() => {
    async function getTodos() {
      const res = await fetch("/api/todos");
      const todos = await res.json();

      console.log(todos);
    }
    getTodos();
  }, []);


  return (
    <main className="container">
      <h1 className="text-center mt-5">
        hello world
      </h1>
    </main>
  )
}


