<template>
  <div>
    <NavigationBar>Perfil</NavigationBar>
    <div class="profile" v-if="user">
      <div :class="{'erro': errors.has('photoURL')}">
        <PhotoCircle :size="128" v-bind:src="user.photoURL" v-on:src="a=>user.photoURL=a" :alt="user.name" :showChangeButton="true"></PhotoCircle>
      </div>
      <form class="profile-formulario" @submit.prevent="enviar">
        <div :class="{'profile-controle name': true, 'erro': errors.has('name')}">
          <input data-vv-as="nome" placeholder="Nome" v-validate="'alpha_spaces|required|min:3|max:100'" v-model="user.name" id="name" name="name" autocomplete="off">
          <span class="erro" v-show="errors.has('name')">{{ errors.first('name') }}</span>
        </div>
        <div :class="{'profile-controle email': true, 'erro': errors.has('email')}">
          <input data-vv-as="e-mail" placeholder="E-mail" v-validate="'required|email'" v-model="user.email" id="email" name="email">
          <span class="erro" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </div>
        <div :class="{'profile-controle phone': true, 'erro': errors.has('phoneNumber')}">
          <input data-vv-as="telefone" placeholder="Telefone" v-validate="'required'" v-model="user.phoneNumber" id="phoneNumber" name="phoneNumber" autocomplete="off">
          <span class="erro" v-show="errors.has('phoneNumber')">{{ errors.first('phoneNumber') }}</span>
        </div>
        <div :class="{'profile-controle birth': true, 'erro': errors.has('birthDate')}">
          <input data-vv-as="Data de nascimento" placeholder="Data de nascimento (dd/mm/aaaa)" 
            v-validate="{rules: 'required'}" v-model="user.birthDate" id="birthDate" name="birthDate">
          <span class="erro" v-show="errors.has('birthDate')">{{ errors.first('birthDate') }}</span>
        </div>
        <div :class="{'profile-controle cpf': true, 'erro': errors.has('cpf')}">
          <input data-vv-as="CPF" placeholder="CPF" maxlength="11" v-validate="'required|min:11|max:11'" v-model="user.cpf" id="cpf" name="cpf">
          <span class="erro" v-show="errors.has('cpf')">{{ errors.first('cpf') }}</span>
        </div>
      </form>
      <div class="profile-btn-container">
        <div class="profile-btn">
          <ButtonComponent type="secondary" :disabled="errors.any()" size="full" :onClick="updateProfile">Salvar</ButtonComponent>
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
import firebase from 'firebase';

export default {
  components: {
    PhotoCircle,
    NavigationBar,
  },
  data() {
    return {
      user: false,
      count: 1,
    };
  },
  created() {
    setTimeout(this.getUser, 1000);
    this.$validator.validateAll();
  },
  methods: {
    cancelProfile() {
      this.$store.dispatch('fetchUser');
    },
    getUser() {
      const user = this.$store.getters.user;
      if (!user) {
        if (this.count < 300) {
          setTimeout(this.getUser, 100);
        } else {
          this.$router.push('/');
        }
      } else {
        this.user = user.clone();
        this.count = 0;
        this.fetchInfoAdditional();
      }
      this.count += 1;
    },
    fetchInfoAdditional() {
      firebase.database().ref(`users/${this.user.providerId}/uid${this.user.uid}/`)
      .once('value')
      .then((snapshot) => {
        this.user.phoneNumber = snapshot.val().phoneNumber;
        this.user.birthDate = snapshot.val().birthDate;
        this.user.cpf = snapshot.val().cpf;
      });
    },
    updateProfile() {
      this.$validator.validateAll()
      .then((success) => {
        if (success) {
          const user = firebase.auth().currentUser;
          user.updateProfile({
            name: this.user.name,
            displayName: this.user.name,
            photoURL: this.user.photoURL,
            phoneNumber: this.user.phoneNumber,
          }).then(() => {
            const addInfo = {
              phoneNumber: this.user.phoneNumber || null,
              birthDate: this.user.birthDate || null,
              cpf: this.user.cpf || null,
            };
            firebase.database().ref(`users/${user.providerId}/uid${user.uid}/`).update(addInfo)
            .then(() => {
              this.$store.commit('UPDATE_CURRENT_USER', user);
              this.$router.back();
            });
          });
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
