import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AddView from '../views/AddView.vue'
import EditView from '../views/EditView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/', // Ruta Default Mostrar Postres
    name: 'home',
    component: HomeView
  },
  {
    path: '/Add', // Ruta Agregar Postre
    name: 'add',
    component: AddView
  },
  {
    path: '/Edit/:id', // Ruta Editar Postre
    name: 'edit',
    component: EditView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
