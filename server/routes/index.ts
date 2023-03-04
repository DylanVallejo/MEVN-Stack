import { Router} from 'express';
import Task  from "../models/Task"


const router = Router();

// mensaje de prueba
router.get("/" ,( req,res) => {
    res.send("Creando una app con el stack MEVN y TS")
})

router.get("/tasks", async (req,res)=>{
    const tasks = await Task.find()
    console.log(tasks)
    res.send(tasks)
    // res.send("get task")
})


router.post("/task", (req,res)=>{
    res.send("post creando taks ")
})


router.get("/task/:id", (req,res)=>{
    res.send("get task by id")
})


router.delete("/task/:id", (req,res)=>{
    res.send("deleting task by id")
})


router.put("/task/:id", (req,res)=>{
    res.send("updating task by id")
})



export default router;