import axios ,{AxiosInstance} from 'axios';


const axiosInstance:AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        "Content-Type": "application/json",
    }
})

export default axiosInstance;