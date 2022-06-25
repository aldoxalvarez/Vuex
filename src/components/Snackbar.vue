<template>
<v-snackbar
  v-model="$store.getters['snackbar/snackbar']"
  rounded="pill"
  relative
  bottom
  :color="$store.getters['snackbar/snackbarColor']"
    >
   {{$store.getters['snackbar/snackbarMensaje']}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
        >
          X
        </v-btn>
      </template>
</v-snackbar> 
</template>

<script>
export default {
    name: 'snackbar',
    
}
</script>