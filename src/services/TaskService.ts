import axios from './axios';
import {AxiosResponse} from 'axios'
import {Task} from '@/interfaces/Task'

// export const showTask = async (): Promise<string> => {
//     const res = await axios.get('/tasks')
//     return res
// }

export const showTask = async (): Promise<AxiosResponse<Task[]>> => 
await axios.get('/tasks')

export const showOneTask = async (id: string): Promise<AxiosResponse<Task>> => 
await axios.get('/task/' + id)


export const createTask = async (task: Task) =>   await axios.post('/task', task)
    // console.log(task)  
