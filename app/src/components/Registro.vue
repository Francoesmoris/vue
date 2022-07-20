<template>
  <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registrate</h3>
            <form>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="firstName" class="form-control form-control-lg" v-model="usuario.nombre"/>
                    <label class="form-label" for="firstName">Nombre</label>
                  </div>
                </div>

                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="text" id="lastName" class="form-control form-control-lg" v-model="usuario.apellido"/>
                    <label class="form-label" for="lastName">Apellido</label>
                  </div>

                </div>

               

                  <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input type="password" name="password" class="form-control form-control-lg" v-model="usuario.contrasena"/>
                    <label class="form-label" for="password">Contraseña</label>
                  </div>
                </div>

              <div class="mt-4 pt-2">
                <input class="btn btn-secondary btn-lg" @click="registrar" value="Registrate" />
              </div>
           </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Registro',
    props: [],
    data(){
        return{
            usuario:{
                nombre:'',
                apellido:'',
                email:'',
                contrasena:''
            }
        }
    },
    methods:{
        registrar(){
            this.$emit('enviarRegistro',this.usuario)
            debugger
        }
    }
}
</script>
