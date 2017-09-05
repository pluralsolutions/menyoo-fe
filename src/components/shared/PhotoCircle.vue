<template>
  <div class="photo-circle">
    <img class="photo-img" @click="changeImage" :src="src" :alt="alt" :style="`height: ${size}px; width: ${size}px;`">
    <button class="photo-change" v-if="showChangeButton" @click.prevent="changeImage">ALTERAR FOTO</button>
    <input ref="photoInput" class="photo-input" v-show="0" v-if="showChangeButton" type="file" @change="onFileChange">
    <div v-if="showRemoveButton&&src">
      <button @click.prevent="removeImage">Remover imagem</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: '',
    alt: {
      default: '',
    },
    size: {
      default: 32,
    },
    showChangeButton: {
      type: Boolean,
      default: false,
    },
    showRemoveButton: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    changeImage() {
      if (this.showChangeButton && this.src) {
        this.$refs.photoInput.click();
      }
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      console.log(files);
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      const reader = new FileReader();
      const vm = this;

      reader.onload = (e) => {
        // vm.src = e.target.result;
        vm.$emit('src', e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.src = '';
    },
  },
};
</script>

<style scoped>
.photo-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: content-box;
  background-clip: content-box;
  border-radius: 50%;
  margin: 4px;
}

.photo-img {
  border: 1px solid #eee;
  height: 32px;
  width: 32px;
  border-radius: 50%;
}
.photo-change {
  background: none;
  border: none;
  padding: 5px;
  color: #36c;
  font-size: 19px;
}
.photo-input {
  padding: 15px;
}
</style>
