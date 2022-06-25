export default {
    namespaced: true,
    state: {
        app:'TEST CRUD',
        type:'VUEX',
      },
       getters: {
         fullTitle: function (state) {
           return `${state.app} ${state.type}`
         }
       },
  }