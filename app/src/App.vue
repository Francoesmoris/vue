<template>
  <div id="app">
    <div v-if="!canAccess">
      <ul class="nav nav-pills nav-justified mb-3">
        <li class="nav-item">
          <a class="navbar-toggler active" data-mdb-toggle="pill" @click="cambiardeRutaLoginPage" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
        </li>
        <li class="nav-item">
          <a class="navbar-toggler" data-mdb-toggle="pill" @click="cambiardeRutaLoginPage" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
        </li>
      </ul>

      <LoginPage
      v-show="estoyEnLogin"
      @changeFlag="recibiElMensaje" 
      :usuarios="listadoDeUsuarios"/>
    
      <Registro 
      v-show="!estoyEnLogin"
      @enviarRegistro="recibirRegistro" 
      />
    </div>
    
    <div v-else>
    <MainPage 
    v-if="canAccess" 
    @changeFlagFromMain="recibiElMensaje" 
     @emitVerDetalle="recibirVerDetalle"
    :productos="listadoDeProductos"
    @emitAgregarAlCarrito="recibirAgregarAlCarrito"
    />
    
    <Carrito :carro='carrito' @emitActualizarCarritoPrincipal="recibirActualizarAlCarrito"/>
    
    <Detalle v-if="selected" :producto="selected"/>

    </div>
</div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import MainPage from './components/MainPage.vue'
import Registro from './components/Registro.vue'
import Carrito from './components/Carrito.vue'
import Detalle from './components/Detalle.vue'
export default {
  name: 'App',
  components: {
    LoginPage,
    MainPage,
    Registro,
    Carrito,
    Detalle
  },
  data(){
    return{
    canAccess:false,
    estoyEnLogin:true,
    listadoDeUsuarios:[],
    listadoDeProductos:[{
  "id": 1,
  "descripcion": "Arlistan",
  "titulo": "Cafe",
  "cantidad": "10",
  "precio": "200",
  "imagen": "https://robohash.org/deseruntsolutanon.png?size=50x50&set=set1"
}, {
  "id": 2,
  "descripcion": "Pro-Plan",
  "titulo": "Alimento de Gato",
  "cantidad": "50",
  "precio": "1200",
  "imagen": "https://robohash.org/sequianimimagni.png?size=50x50&set=set1"
}, {
  "id": 3,
  "descripcion": "Sin Gas",
  "titulo": "Agua",
  "cantidad": "200",
  "precio": "100",
  "imagen": "https://robohash.org/ipsamveritatisimpedit.png?size=50x50&set=set1"
}, {
  "id": 4,
  "descripcion": "Blanco",
  "titulo": "Vino",
  "cantidad": "300",
  "precio": "500",
  "imagen": "https://robohash.org/dolorumtotamaut.png?size=50x50&set=set1"
}, {
  "id": 5,
  "descripcion": "Surtido",
  "titulo": "Galletitas",
  "cantidad": "30",
  "precio": "200",
  "imagen": "https://robohash.org/autnihilquisquam.png?size=50x50&set=set1"
}],
    carrito:[],
    selected: null
    }
  },
  methods:{
    recibiElMensaje(){
      this.canAccess = !this.canAccess
    },
    recibirRegistro(payload){
      this.listadoDeUsuarios.push(payload)
    },
    recibirAgregarAlCarrito(payload){
      this.carrito.push(payload)
    },
    recibirActualizarAlCarrito(payload){
          //this.carrito = [...payload]
          this.carrito = Object.assing(this.carrito,payload)
    },
    recibirVerDetalle(payload){
      this.selected = payload
    },
    cambiardeRutaLoginPage(){
      this.estoyEnLoginPage = !this.estoyEnLoginPage;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>