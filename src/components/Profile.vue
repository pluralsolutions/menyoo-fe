<template>
  <div>
    <h1>Perfil</h1>
    <div class="center">
      <h2>{{user.name}}</h2>
      <photo-circle :size="128" :src="user.urlPhoto" :alt="user.name"></photo-circle>
    </div>
    <form class="formulario" @submit.prevent="enviar">
      <div :class="{'controle': true, 'erro': errors.has('urlPhoto')}">
        <label for="name'">Name</label>
        <input data-vv-as="Name" v-model.lazy="user.name" id="name" name="name" autocomplete="off" :class="input" v-validate data-vv-rules="required|min:3|max:30" >
        <span class="erro" v-show="errors.has('titulo')">{{ errors.first('titulo') }}</span>
      </div>
      <div :class="{'controle': true, 'erro': errors.has('urlPhoto')}">
        <label for="urlPhoto">urlPhoto</label>
        <input v-validate data-vv-rules="required" v-model.lazy="user.urlPhoto" id="urlPhoto" name="urlPhoto" autocomplete="off">
        <span class="erro" v-show="errors.has('urlPhoto')">{{ errors.first('urlPhoto') }}</span>
      </div>
    </form>
  </div>
</template>

<script>
import User from '@/domain/User';
import PhotoCircle from '@/components/shared/PhotoCircle';

export default {
  name: 'hello',
  components: {
    'photo-circle': PhotoCircle,
  },
  data() {
    return {
      msg: 'Hello!',
      user: new User('Gabriel Toledo', 'http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg'),
    };
  },
  methods: {
    enviar: function enviar() {
      this.$validator
      .validateAll()
      .then((success) => {
        if (success) {
          // voltar para pagina home.
          this.$router.push({ name: 'home' });
          // salvar dados do usuario
          // this.service
            // .cadastra (this.user)
            // .then(() => {
              // if(this.id) this.$router.push({name: 'home'});
              // this.user = new user();
            // }, err => console.log(err));
        }
      },
      // eslint-disable-next-line
      (err) => console.log(err));
    },
  },
};
</script>

<style>
  @import '../assets/styles/profile.css'
</style>
