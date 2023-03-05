<template>
    <nav>
        <ul>
            <li>
                <router-link to="/tasks">tasks</router-link>
            </li>
            <li>
                <router-link to="/task/new">Create task</router-link>
            </li>   
            
        </ul>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavBar",
})
</script>
