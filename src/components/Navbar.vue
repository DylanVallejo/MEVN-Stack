<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <router-link to="/" class="navbar-brand">Vue TypeScript</router-link>
            <div>
                <ul class="navbar-nav">
                    <li class="nav-item text-white">
                        <router-link to="/tasks" class="nav-link">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/task/new" class="nav-link">Create task</router-link>
                    </li>   
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "NavBar",
})
</script>
