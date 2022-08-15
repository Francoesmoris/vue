<template>
 <div class="container">
  <h1>Carrito</h1>
  {{productos}}
  <hr>
  <div class="row">
   <Card
   v-for="producto of productos" :key="producto.id"
   :productos="producto" 
   />
  </div>

</div>
</template>

<script>
import {useStore} from 'vuex'
import { computed, onMounted } from 'vue'
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    Card,
    
  },
  setup(){
    const store = useStore()
    onMounted(() => {
      store.dispatch('fetchData')
    })

    const productos = computed(() => store.state.productos)

    return {productos}
  }
}
</script>


