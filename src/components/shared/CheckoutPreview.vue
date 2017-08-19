<template>
  <div>
    <CartIcon @toogle="tooglePreview" />
    <CheckoutPreviewContent @toogle="tooglePreview" v-model="previewIsOpen" />
  </div>
</template>

<script>
  import CartIcon from '@/components/shared/CartIcon';
  import CheckoutPreviewContent from '@/components/shared/CheckoutPreviewContent';

  export default {
    components: {
      CartIcon,
      CheckoutPreviewContent,
    },
    data() {
      return {
        previewIsOpen: false,
      };
    },
    methods: {
      tooglePreview: function tooglePreview() {
        this.previewIsOpen = !this.previewIsOpen;
      },
    },
  };
</script>
