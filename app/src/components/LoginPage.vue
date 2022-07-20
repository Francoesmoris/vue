<template>
<div>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
            <form>

              <div class="row">
                <div class="col-md-12 mb-4">

                  <div class="form-outline">
                    <input type="text" id="nombre" class="form-control form-control-lg" v-model="nombre"/>
                    <label class="form-label" for="nombre">Nombre</label>
                  </div>

                  <div class="form-outline">
                    <input type="password" id="pwd" class="form-control form-control-lg" v-model="pwd"/>
                    <label class="form-label" for="pwd">Contraseña</label>
                  </div>
                </div>

              <div class="mt-4 pt-2">
                <input type="button" class="btn btn-secondary btn-lg" value="Login" @click="cambiarValor"/>
              </div>
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>

</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    usuarios: Array
  },
  data(){
    return {
      nombre:'',
      pwd:'',
    }
  },
  methods:{
    cambiarValor(){
      let existe = this.usuarios.filter(o=>o.usuario == this.nombre && o.contrasena == this.pwd)
      if(existe){
        this.$emit('changeFlag')
      }
    }
  }
}
</script>
