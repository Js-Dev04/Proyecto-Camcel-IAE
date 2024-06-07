<!-- eslint-disable vue/multi-word-component-names -->

<!--<style scoped>
.q-btn.q-btn--density-default {
  height: fit-content;
}
</style>-->

<template>
  <div>
    <q-btn v-for="empresa in empresas" :key="empresa.id">
      <q-avatar>
        <img :src="empresa.imagen" />
      </q-avatar>
      {{ empresa.nombre }}
      <br />
      {{ empresa.descripcion }}
      <br />
      {{ empresa.verificado ? "Verificado" : "No verificado" }}
    </q-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      empresas: [],
    };
  },
  mounted() {
    axios
      .get("/datos.json")
      .then((response) => {
        this.empresas = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
