<template>
    <h2>task detail</h2>
    <form>
        <input type="text" v-model="currentTask.title">
        <textarea rows="3" v-model="currentTask.description"></textarea>
    </form>
</template>
<script lang="ts">
    import { Task } from '@/interfaces/Task';
    import { showOneTask } from '@/services/TaskService'
    import { defineComponent } from '@vue/runtime-core'
    export default defineComponent({
        data(){
            return {
                currentTask: {} as Task
            }
        },
        methods: {
            async loadTask(id: string){
                const res = await showOneTask(id);
                this.currentTask = res.data;
                console.log(res)
            }
        },
        mounted(){
            if(typeof this.$route.params.id === "string"){
                this.loadTask(this.$route.params.id);
            }
            // console.log()
        }
    })
</script>
