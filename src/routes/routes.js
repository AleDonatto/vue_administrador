import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import EditAdmin from '../components/EditAdmin.vue'
import ViewAdmin from '../components/ViewAdmin.vue'
import AddAdmin from '../components/AddAdmin.vue'
import Confirmation from '../components/Confirmation.vue'


const routesWeb = [
    { path: '/', component: Dashboard },
    { path: '/editAdmin', component: EditAdmin },
    { path: '/viewAdmin', component: ViewAdmin },
    { path: '/addAdmin', component:  AddAdmin },
    { path: '/confirmation', component: Confirmation }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routesWeb
});

export default router;