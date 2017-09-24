<template>
  <div>
    <NavigationBar>Perfil</NavigationBar>
    <div class="profile">
      <div :class="{'erro': errors.has('photoURL')}">
        <PhotoCircle :size="128" v-bind:src="user.photoURL" v-on:src="a=>user.photoURL=a" :alt="user.name" :showChangeButton="true"></PhotoCircle>
      </div>
      <form class="profile-formulario" @submit.prevent="enviar">
        <div :class="{'profile-controle name': true, 'erro': errors.has('name')}">
          <input data-vv-as="nome" placeholder="Nome" v-validate="'alpha_spaces|required|min:3|max:100'" v-model="user.name" id="name" name="name" autocomplete="off">
          <span class="erro" v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div :class="{'profile-controle phone': true, 'erro': errors.has('phone')}">
          <input data-vv-as="telefone" placeholder="Telefone" v-validate="'required'" v-model="user.phone" id="phone" name="phone" autocomplete="off">
          <span class="erro" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
        </div>
        <div :class="{'profile-controle email': true, 'erro': errors.has('email')}">
          <input data-vv-as="e-mail" placeholder="E-mail" v-validate="'required|email'" v-model="user.email" id="email" name="email">
          <span class="erro" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
        <div :class="{'profile-controle birth': true, 'erro': errors.has('birth')}">
          <input data-vv-as="Data de nascimento" placeholder="Data de nascimento (dd/mm/aaaa)" 
            v-validate="{rules: 'required'}" v-model="user.birth" id="birth" name="birth">
          <span class="erro" v-show="errors.has('birth')">{{ errors.first('birth') }}</span>
        </div>
        <div :class="{'profile-controle cpf': true, 'erro': errors.has('cpf')}">
          <input data-vv-as="CPF" placeholder="CPF" maxlength="11" v-validate="'required|min:11|max:11'" v-model="user.cpf" id="cpf" name="cpf">
          <span class="erro" v-show="errors.has('cpf')">{{ errors.first('cpf') }}</span>
        </div>
      </form>
      <div class="profile-btn-container">
        <div class="profile-btn">
          <ButtonComponent type="secondary" :disabled="errors.any()" size="full" :onClick="saveProfile">Salvar</ButtonComponent>
        </div>
        <div class="profile-btn">
          <ButtonComponent type="primary" size="full" :onClick="cancelProfile">Cancelar</ButtonComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoCircle from '@/components/shared/PhotoCircle';
import NavigationBar from '@/components/shared/NavigationBar';

export default {
  name: 'profile',
  components: {
    PhotoCircle,
    NavigationBar,
  },
  data() {
    return {
      user: this.$store.getters.loggedUser.clone(),
    };
  },
  mounted() {
    this.$validator.validateAll();
  },
  computed: {
    maxDate: () => ((new Date()).toLocaleDateString()),
  },
  methods: {
    cancelProfile() {
      // this.$store.dispatch('fetchUser');
    },
    saveProfile() {
      this.$validator.validateAll()
      .then((success) => {
        if (success) {
          // voltar para pagina home.
          this.$store.dispatch('updateUser', { user: this.user });
          this.$router.push('/restaurantes/bar-do-ze');
          // salvar dados do usuario
          // this.service
            // .cadastra (this.user)
            // .then(() => {
              // if(this.id) this.$router.push({name: 'home'});
              // this.user = new user();
      // eslint-disable-next-line
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
