<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="q-pa-md">
    <q-layout
      
      container
      style="height: 600px"
      class="shadow-2 rounded-borders "
    >
      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        :width="200"
        :breakpoint="200"
        bordered
        :class="$q.dark.isActive ? 'bg-teal-10' : 'bg-teal-10'"
      >
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 150px;
            border-right: 1px solid #ddd;
          "
        >
          <q-list padding>
            <q-item clickable v-ripple v-for="(boton , index) in botones"
            :key="index" @click="pagina(boton.pagina)">
              <q-item-section avatar>
                <q-icon :name="boton.icono" />
              </q-item-section>

              <q-item-section> {{ boton.nombre }} </q-item-section>
            </q-item>
          </q-list>
            
        </q-scroll-area>

        <q-img
          class="absolute-top bg-teal-10"
          
          style="height: 150px"
        >
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="img-avatar" v-show="!miniState">
              <img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                class="img-avatar"
              />
            </q-avatar>
            <div class="text-weight-bold" v-show="!miniState">
              Nombre de la empresa
            </div>
          </div>
        </q-img>
      </q-drawer>
      <q-container style="    padding-left: 58px;
      /* padding-top: 10px; */
      position: fixed;"><router-view/>
      <footer/> </q-container>
     
    </q-layout>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router"
  import footer from 'src/components/Footer.vue';
  const router = useRouter()
  const drawer = ref(false)
  const miniState = ref(true)
  const botones = ref([
    {nombre:"Inicio",icono:"mdi-home-circle",pagina:"/inicio" },
    {nombre:"Cuenta",icono:"mdi-account",pagina:"/cuenta" },
    {nombre:"Calendario",icono:"mdi-calendar",pagina:"/Calendario" },
    {nombre:"Mis Empresas",icono:"mdi-home",pagina:"/empresas" },
    {nombre:"Crear Documento",icono:"mdi-file",pagina:"/crear/documentos" },
    
  ])
  const pagina =(e)=>{
    router.push(e)
  }
</script>
<style scoped>
.q-pa-md {
  padding: 0px;
  margin-top: 0px;
}
.img-avatar {
  display: flex;
}
.absolute-full,
.fullscreen,
.fixed-full {
  top: 50px;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
