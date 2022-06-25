import Vue from 'vue'
import Vuex from 'vuex'
import AppModule from './app.module.js'
import PostresModule from './postres.module.js'
import SnackbarModule from './snackbar.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app:AppModule,            // Titulos 
    postres:PostresModule,    // Mostrar / Agregar Postre
    snackbar:SnackbarModule,  // Alerta Agregado / Editado
  }
})
