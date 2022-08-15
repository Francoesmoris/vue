<template>
 <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 mb-3">
  <div class="card">
    <img :src="procucto.thumbnailUrl" :alt="`imagen-${producto.title}`" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{producto.title}}</h5>
      <p class="card-text">$<span>{{producto.precio}}</span></p>
      <button class="btn btn-dark">Comprar</button>
    </div>
   </div>
</div>
</template>

<script>
export default {
    name:"CardComponent",
    props:['producto']

}
</script>

<style>

</style>