<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
          <v-btn
            to="/Add"
            color="green"
          >
          <span class="mr-2">Agregar Postre</span>
          <v-icon>mdi-plus</v-icon>
          </v-btn> 
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col col=8 class="mb-4">
     <div>
    <v-data-table
      :headers="headers"
      :items="$store.state.postres.items"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Buscar"
          class="mx-4"
        ></v-text-field>
      </template>
       <template v-slot:[`body.append`]>
          <tr>
            <td></td>
            <td>
              <v-text-field
                v-model="calories"
                type="number"
                label="Menos de"
              ></v-text-field>
            </td>
            <td colspan="4"></td>
          </tr>
        </template>

        <!--Campo nombre edicion  -->
        <template v-slot:[`item.name`]="{ item }">
            <v-tooltip 
            bottom
            color="warning">
                <template v-slot:activator="{ on }">
                  <div 
                  class="pointer"
                  dark
                  v-on="on"
                  @dblclick="Edit(item.id)">
                  {{ item.name }}
                   </div>
                </template>
           <span>Doble Click para editar</span>
            </v-tooltip>
          </template> 

    </v-data-table>
  </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<style>
/* Classe puntero editar */
.pointer {cursor: pointer;}
</style>
<script>
  export default {
    name: 'HomeView',

    data: () => ({
        body:'',
        search: '', // Variable busqueda
        calories:'', // Variable filtro
    }),
computed: {
  // Encabezados de Datatable
      headers () {
        return [
          {
            text: 'Postre (100g)',
            align: 'start',
            value: 'name',
          },
          //Filtro Calorias
          {
            text: 'Calorias',
            value: 'calories',
            filter: value => {
              if (!this.calories) return true

              return value < parseInt(this.calories)
            },
          },          
          { text: 'Grasa (g)', value: 'fat' },
          { text: 'Carbohidratos (g)', value: 'carbs' },
          { text: 'Proteina (g)', value: 'protein' },
          { text: 'Hierro (%)', value: 'iron'},
        ]
      },
    },

methods: {
          Edit(id){
            this.$router.push({name:'edit', params: {id} });
          },
          
          // Funcion de busqueda
          filterOnlyCapsText (value, search) {
            return value != null &&
              search != null &&
              typeof value === 'string' &&
              value.toString().toLocaleLowerCase().indexOf(search) !== -1
          },
        },

  }
</script>
