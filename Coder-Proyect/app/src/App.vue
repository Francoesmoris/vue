<template>
  <div class="container">
    <h1>Carrito con vue.js</h1>
    <hr>
    <Carrito />
    <div class="row">
      <div 
        v-for="producto of productos" :key="producto.id"
        class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3"
      >
        <Card 
          :producto="producto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import { computed, onMounted } from 'vue'
import Card from './components/Card'
import Carrito from './components/Carrito'

export default {
  name: 'App',
  components: {
    Card, Carrito
  },
  setup(){
    const store = useStore()
    onMounted(async() => {
      store.dispatch('fetchData')
    })

    const productos = computed(() => store.state.productos)

    return {productos}
  }
}
</script>