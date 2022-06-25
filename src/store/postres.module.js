export default {
    namespaced: true,
     state: {
          items:[  // Postres Default
          {
            id:0,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
          },
         ]
       },
      mutations: {
        //Actualizar Postres
        UPDATE_POSTRES(state, payload) {
          state.items=payload;
        }
      },
      actions: {
        //Agregar Postre
        addPostre(context, payload) { 
          const postres = context.state.items
          console.log(payload)
          payload.id = postres.length;
          postres.push(payload)
          context.commit('UPDATE_POSTRES', postres)
        },
        // editPostre(context) { 
        //   const postres = context.state.items;  
        //  context.commit('UPDATE_POSTRES', postres)
        // },
      },
  }