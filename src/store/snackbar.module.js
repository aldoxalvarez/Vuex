export default {
    namespaced: true,
    state: {
        snackbar:false,
        mensaje:'',
        snackbarColor:''
      },
      getters: {
        snackbarShow: function (state) {
          return `${state.snackbar}`
        },
        snackbarMensaje: function (state) {
            return `${state.mensaje}`
          },
          snackbarColor: function (state) {
            return `${state.snackbarColor}`
          }
      },
      mutations: {
        //Actualizar Valores Snackbar
        UPDATE_SNACKBAR(state, snackbar, mensaje, snackbarColor) {
          state.snackbar = snackbar;
          state.mensaje = mensaje;
          state.snackbarColor = snackbarColor;
        }
      },
      actions: {
        showSnackbarAdd(context, payload) { 
          let snackbar = context.state.snackbar;
          let mensaje = context.state.mensaje;
          let snackbarColor = context.state.snackbarColor;

          snackbar = true;
          mensaje = payload;
          snackbarColor = 'green';
          console.group(
            snackbar,
            mensaje,
            snackbarColor
          )

          context.commit('UPDATE_SNACKBAR', snackbar, mensaje, snackbarColor);
        }
      },
  }