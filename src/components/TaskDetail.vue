<template>
    <div class="col-md-4 offset-md-4">
        <form class="card card-body mb-3 " @submit.prevent="$event=>handleUpdate()">
            <h2 class="text-center h3 mb-3">Task detail</h2>
            <input class="form-control mb-3" type="text" v-model="currentTask.title">
            <textarea class="form-control mb-3" rows="3" v-model="currentTask.description"></textarea>
            <button class="btn btn-primary">Update</button>
        </form>
        <div class="text-center ">
            <button class="btn btn-danger text-center " @click="$event=>handleDelete()">Delete</button>
            
        </div>
    </div>
</template>
<script lang="ts">
    import { Task } from '@/interfaces/Task';
    import { showOneTask } from '@/services/TaskService'
    import { defineComponent } from '@vue/runtime-core'
    import { updateTask } from '@/services/TaskService'
    import { deleteTask } from '@/services/TaskService'
    
    
    
    export default defineComponent({
        data(){
            return {
                currentTask: {} as Task,
            }
        },
        methods: {
            async loadTask(id: string){
                const res = await showOneTask(id);
                console.log("res detail")
                console.log(res)
                this.currentTask = res.data;
            },
            async handleUpdate(){
                if(typeof this.$route.params.id === "string"){
                    const res =  await updateTask(this.$route.params.id, this.currentTask);
                    console.log(res)
                    this.$router.push({name: "tasks"})
                    
                }
                
            },
            async handleDelete(){
                if(typeof this.$route.params.id === "string"){
                    const res = await deleteTask(this.$route.params.id)
                    console.log(res)
                    this.$router.push({name: "tasks"})
                }
                
            }
        },
        mounted(){
            if(typeof this.$route.params.id === "string"){
                this.loadTask(this.$route.params.id);
            }
        }
    })
</script>
