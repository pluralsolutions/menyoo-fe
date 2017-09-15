<template>
  <div id="app">
    <HeaderApp></HeaderApp>
    <main>
      <transition name="main">
        <router-view></router-view>
      </transition>
    </main>
    
    <script type="text/x-template" id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header"></slot>
              </div>

              <div class="modal-body">
                <slot name="body"></slot>
              </div>

              <div class="modal-footer">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
  </div>
</template>

<script>
import HeaderApp from '@/components/shared/HeaderApp';

export default {
  name: 'app',
  components: {
    HeaderApp,
  },
};
</script>

<style src='@/assets/styles/app.css'>
</style>
