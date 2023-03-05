import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import taskRoutes from './routes'
import  path from 'path'

const app = express();

//permite solicitusdes
app.use(cors());
//muestra las solicitudes en consola
app.use(morgan('dev'));
//el back lograra entender archivos json middleware
app.use(express.json())


app.use("/api", taskRoutes)

//desplegar back 
//sube un nivle y ejecuta la carpeta dist 
app.use(express.static(path.join(__dirname, "..", "..", '../dist')))

export default app
