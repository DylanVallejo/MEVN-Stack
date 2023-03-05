<template>
    <div class="col-md-4 offset-md-4">
        <form class="card card-body" @submit.prevent="$event=>saveTask()">
            <h3 class="text-center">Create task</h3>
            <input autofocus class="form-control mb-3"  type="text" placeholder="Write a title" v-model="task.title"/>
            <textarea class="form-control mb-3" rows="3" placeholder="Write a description" v-model="task.description"></textarea>
            <button class="btn btn-primary" :disabled="!task.title || !task.description">Save</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Task } from '@/interfaces/Task';
    import {createTask} from '@/services/TaskService'
    
    export default defineComponent({
        // name: "TaskForm",
        data(){
            return {
                task: {} as Task,
            };
        },
        methods: {
            async saveTask() {
                // console.log(createTask(this.task))
                console.log(this.task)
                const res = await createTask(this.task)
                console.log(res);
                this.$router.push({name: "tasks"})
            }
        }
    })
</script>

<style scoped>

</style>