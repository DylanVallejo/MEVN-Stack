import { RouteRecordRaw, createRouter,createWebHistory} from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias:'/tasks',
        name: 'tasks',
        component: () => import('@/components/TaskList.vue')
    },
    {
        path: '/task/new',
        name: 'task-new',
        component: () => import('@/components/TaskForm.vue')
    },
    {
        path: '/task/:id',
        name: 'task-details',
        component: () => import('@/components/TaskDetail.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;