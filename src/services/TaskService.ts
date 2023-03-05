import axios from './axios';
import {AxiosResponse} from 'axios'
import {Task} from '@/interfaces/Task'

// export const showTask = async (): Promise<string> => {
//     const res = await axios.get('/tasks')
//     return res
// }

//getting a all the tasks

export const showTask = async (): Promise<AxiosResponse<Task[]>> => 
await axios.get('/tasks')


//getting a task by id 
export const showOneTask = async (id: string): Promise<AxiosResponse<Task>> => 
await axios.get('/task/' + id)

//creating a task 
export const createTask = async (task: Task) =>   await axios.post('/task', task)
    // console.log(task)  


//Updating a task 
export const updateTask = async (id: string , task:Task) => 
    await axios.put('/task/' + id, task)
    
// dELETE TASK 
export const deleteTask  = async (id: string ): Promise<AxiosResponse<Task>> =>
    await axios.delete('/task/'+id)