
## Project setup
```
npm install
```
## Ejecutar back
```
npm start desde la carpeta root 
```
## ejecutar back desde su carpeta
```
npm start 
```

## Crear build del back 
```
npm tsc
```   


## rutas 

localhost:8000/api/tasks   GET
- trae todas las tareas


localhost:8000/api/task/:id GET
- trae una tarea por id


localhost:8000/api/task POST
-crea una nueva tarea

    {
        "title": "MEVN STACK ",
        "description": "Creacion de un todoList con el stack MEVN y TS"
    }


localhost:8000/api/task PUT
-actualiza una tarea 
    {
        "title": "NEW MEVN STACK ",
        "description": "todoList stack MEVN y TS "
    }


localhost:8000/api/task Delete
-borra una tarea 

