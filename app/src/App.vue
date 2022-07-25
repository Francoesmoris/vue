<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Formulario Clase 8"/>
    <FormularioWeb @emit-agregar-usuario="addUsuarioTabla"/>
    <TablaWeb :usuarios="usuarios"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormularioWeb from './components/FormularioWeb.vue'
import TablaWeb from './components/TablaWeb.vue'
export default {
  name: 'App',
  components: {
    HelloWorld, FormularioWeb,TablaWeb
  },
  data() {
        return {
            usuarios: []
        }
    },
    methods: {
        addUsuarioTabla(usuario) {
            console.log(usuario);
            const nuevoUsuario = {...usuario};
            this.usuarios.push(nuevoUsuario);
        }
    }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>