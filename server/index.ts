import app from './app'
import { startConnection } from "./dataBase" 
const port = 8000;

startConnection();
app.listen(port)
console.log(`server running on port ${port}`)

// import no funcionara debemos ejecturar npx tsc --init crear un archivo ts config

