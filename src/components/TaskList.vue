<template>
    <div>
        <h2>tasklist</h2>
        <ul>
            <li v-for="(task,index) in tasks" :key="index" @click="$event=>$router.push(`/task/${task._id}`)">
                {{ task.title }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { Task } from '@/interfaces/Task';
    import {showTask} from '@/services/TaskService'
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        data(){
            return {
                tasks: [] as Task[]
            }
        },
        methods: {
            async listTask() {
                const res = await showTask();
                console.log(res) 
                this.tasks = res.data
            },
        },
        mounted(){
            this.listTask();
            console.log("mounted")
        },
    })
    
</script>
