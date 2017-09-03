<template>
  <div>
    <NavigationBar>Profile</NavigationBar>
    <div class="profileuser">
      <PhotoCircle :size="128" :src="user.urlPhoto" :alt="user.name"></PhotoCircle>
      <a>ALTERAR</a>
      <form class="profile-formulario" @submit.prevent="enviar">
        <div :class="{'profile-controle name': true, 'erro': errors.has('name')}">
          <input data-vv-as="nome" v-validate data-vv-rules="alpha_spaces|required|min:3|max:100" v-model.lazy="user.name" id="name" name="name" autocomplete="off">
          <span class="erro" v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div :class="{'profile-controle phone': true, 'erro': errors.has('phone')}">
          <input data-vv-as="telefone" v-validate data-vv-rules="required" v-model.lazy="user.phone" id="phone" name="phone" autocomplete="off">
          <span class="erro" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
        </div>
        <div :class="{'profile-controle email': true, 'erro': errors.has('email')}">
          <input data-vv-as="e-mail" v-validate="{ rules: {required: true, email: true }}" v-model="user.email" id="email" name="email">
          <span class="erro" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
        <div :class="{'profile-controle birth': true, 'erro': errors.has('birth')}">
          <input data-vv-as="data de nascimento" v-validate="{ rules: {required: true, date_format: 'DD/MM/YYYY' } }" v-model="user.birth" id="birth" name="birth">
          <span class="erro" v-show="errors.has('birth')">{{ errors.first('birth') }}</span>
        </div>
        <div :class="{'profile-controle cpf': true, 'erro': errors.has('cpf')}">
          <input data-vv-as="CPF" v-validate="{ rules: {required: true, min:11, max: 11 } }" v-model="user.cpf" id="cpf" name="cpf">
          <span class="erro" v-show="errors.has('cpf')">{{ errors.first('cpf') }}</span>
        </div>
      </form>
        <div class="profile-btn-container">
          <div class="profile-btn">
            <Button type="secondary" :disabled="errors.any()" size="full">Salvar</Button>
          </div>
          <div class="profile-btn">
            <Button type="primary" size="full">Cancelar</Button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import PhotoCircle from '@/components/shared/PhotoCircle';
import NavigationBar from '@/components/shared/NavigationBar';
import Button from '@/components/shared/Button';

export default {
  name: 'profile',
  components: {
    PhotoCircle,
    NavigationBar,
    Button,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.user = this.$store.getters.loggedUser;
    console.log(this.user);
  },
  computed: {
    maxDate: () => ((new Date()).toLocaleDateString()),
  },
  methods: {
    enviar: function enviar() {
      this.$validator
      .validateAll()
      .then((success) => {
        if (success) {
          // voltar para pagina home.
          this.$router.push('/');
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
  @import '../assets/styles/profile.css';
</style>
