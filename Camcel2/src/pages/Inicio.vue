<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->

<template>

    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card bg-secondary text-white" clickable v-ripple v-for="(empresas , index) in empresas"
        :key="index">
        <q-item-section avatar>
            <q-img  img="empresas.icono" />
          </q-item-section>  
        <q-card-section>
            <div class="text-h6">{{ empresas.nombre }}</div>
            <div class="text-subtitle2"> {{ empresas.descripcion }} </div>
          </q-card-section>
    
          <q-card-section>
            {{ lorem }}
          </q-card-section>
    
          <q-separator dark />
    
        
        </q-card>
    </div>
    
    
    
    
   

</template>

<script setup>
 import { ref } from "vue";
const empresas = ref([
    {nombre:"empresa1",img:"https://img.freepik.com/vector-gratis/ilustracion-concepto-empresa_114360-2581.jpg",descripcion:"/inicio" },
    {nombre:"empresa2",img:"https://img.freepik.com/vector-gratis/ilustracion-concepto-empresa_114360-2581.jpg",descripcion:"/cuenta" },
    {nombre:"empresa3",img:"https://img.freepik.com/vector-gratis/ilustracion-concepto-empresa_114360-2581.jpg",descripcion:"/Calendario" },
    {nombre:"empresa5",img:"https://img.freepik.com/vector-gratis/ilustracion-concepto-empresa_114360-2581.jpg",descripcion:"/empresas" },
    {nombre:"empresa6",img:"https://img.freepik.com/vector-gratis/ilustracion-concepto-empresa_114360-2581.jpg",descripcion:"/crear/documentos" },
    
  ])

</script>
