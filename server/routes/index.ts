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


router.post("/task",async (req,res)=>{
    // console.log(req.body);
    const {title, description} = req.body;
    const task = new Task({title, description})
    await  task.save();
    // console.log(task) 
    res.send(`Task created : ${task}`)
}) 


router.get("/task/:id", async (req,res)=>{
    
    try {
        console.log(req.params)
        // const { params } = req;
        const  task = await Task.findById(req.params.id)
        if(!task) return res.status(404).send({message: "task not found"})
        return res.send(task)
        
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    } 
})


router.delete("/task/:id", async (req,res)=>{
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        if(!deletedTask) return res.status(404).send({message: "task not found"})
        res.send(` task deleted by id ${deletedTask}`)
    } catch (error) {
        return res.status(500).send(error)
    }
})


router.put("/task/:id", async (req,res)=>{
    
    try {
        // findByIdAndUpdate recive el id y el objeto nuevo a actualizar new: true me retorna el objeto actualizado
        // al no poner new me retorna el objeto antiugo 
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if(!updatedTask) return res.status(404).send({message: "task not found"});
        return res.send(updatedTask);
    } catch (error) {
        return res.status(500).send(error);
    }
})



export default router;