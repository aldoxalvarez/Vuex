<template>
<v-container>
  <v-row class="d-flex justify-center">
    <v-col justify-center cols=6>
  <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
      <form @submit.prevent="submit">

        <validation-provider
          v-slot="{ errors }"
          name="Nombre"
          rules="required|max:15"
        >
          <v-text-field
            v-model="postre.name"
            :error-messages="errors"
            label="Nombre Postre"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Calorias"
        rules="required"  
              >
          <v-text-field
            type="number"
            class="numeric"
            v-model="postre.calories"
            :error-messages="errors"
            label="Calorias"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Grasa"
        rules="required" 
          >
          <v-text-field
            type="number"
            class="numeric"
            v-model="postre.fat"
            :error-messages="errors"
            label="Grasa"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Carbohidratos"
        rules="required" 
          >
          <v-text-field
            type="number"
            class="numeric"
            v-model="postre.carbs"
            :error-messages="errors"
            label="Carbohidratos"
            required
          ></v-text-field>
        </validation-provider>

         <validation-provider
          v-slot="{ errors }"
          name="Proteina"
        rules="required" 
          >
          <v-text-field
            type="number"
            class="numeric"
            v-model="postre.protein"
            :error-messages="errors"
            label="Proteina"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Hierro"
          rules="hierroRules"
        
          >
          <v-text-field
            type="number"
            class="numeric"
            v-model="postre.iron"
            :error-messages="errors"
            label="Hierro %"
            required
          ></v-text-field>
        </validation-provider>
        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
          color="green"
        >
          Guardar
        </v-btn>
        <v-btn 
        color="orange"
        @click="clear">
          Cancelar
        </v-btn>
      </form>
    </validation-observer>
      </v-col>
  </v-row>

  <snackbarComponent v-if="guardado"></snackbarComponent>

    </v-container>
</template>
<script>
  import { required, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import postreModel from '@/models/postre';

  setInteractionMode('eager')

   extend('required', {
     ...required,
     message: '{_field_} es requerido',
   })

   extend('max', {
     ...max,
     message: '{_field_} no debe ser mayor a {length} caracteres',
   })

  extend('hierroRules', value => {
  if (value <= 100) {
    return true;
  }
  return 'Hierro debe de ser menor que 100%';
});

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      guardado:false,
      postre: new postreModel,
    }),

    methods: {
      submit () {
        this.guardado = true;
        this.$refs.observer.validate();
        this.$store.dispatch('postres/addPostre',this.postre);
        this.$store.dispatch('snackbar/showSnackbarAdd','Guardado Correctamente')

        setTimeout(() => {
          this.$router.push({name:'home'});
          this.guardado = false;
        }, 2000);
      },
      clear () {
        this.postre.name = ''
        this.postre.calories = 0;
        this.postre.fat = 0;
        this.postre.carbs = 0;
        this.postre.protein = 0;
        this.postre.iron = 0;
        this.$refs.observer.reset()
        this.$router.push({name:'home'});
      },
    },
  }
</script>