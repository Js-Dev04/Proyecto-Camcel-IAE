<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="q-pa-md">
    <div class="row no-wrap">
      
        
        
        
      <q-toolbar class="col-10 bg-teal-10 text-white">
        <q-btn flat round dense icon="mdi-account-circle" />
        <q-toolbar-title>Nombre del usuario</q-toolbar-title>
        
        
          <q-input class="col-8 bg-teal-10 text-white  "  filled v-model="text" label="Busqueda">
            <template v-slot:prepend>
              <q-btn   flat round dense class="icono_de_busqueda" icon="search"/>
            </template>
          </q-input>
          

        </q-toolbar>
        <q-toolbar class="col-2 bg-teal-10 text-white">
        <q-btn flat round dense icon="mdi-chat" />
        <q-btn flat round dense class="q-pa-md" icon="mdi-menu" >
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Perfil</q-item-section>
              </q-item>
              
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Empresa</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Documentos</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Descargas</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Configuracion</q-item-section>
              </q-item>

              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Cerrar Sesion</q-item-section>
              </q-item>

            </q-list>
          </q-menu>
        </q-btn>
  
        <!--<ul class="menu_vertical">
          <li>
          <RouterLink to="/perfil"><a>Perfil</a></RouterLink>
          </li> 
          <li>
          <RouterLink to="/login"><a>Login</a></RouterLink>
          </li> 
          <li>
          <RouterLink to="/registro"><a>Registro</a></RouterLink>
          </li> 
          <li>
          <RouterLink to="/cerrar"><a>Cerrar Sesion</a></RouterLink>
          </li> 

        </ul>-->
       
      </q-toolbar>
    </div>
  </div>
</template>

<style scoped>
.q-pa-md {
  padding: 0px 0px;
  
}
.row, .column, .flex {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: flex-end;
}
.borde-de-toolbar{
  
    border: 20px;
    border: groove rgb(49, 152, 248);
}


</style>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      text: ref('')
    }
  }
}
</script>