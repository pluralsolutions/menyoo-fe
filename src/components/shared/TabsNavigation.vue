<template>
  <div>
    <ul>
      <li class="tab-title" :show="selectedTab === tab.title"
         v-for="tab in tabs" :key="tab.title" :click="notify(tab)">{{ tab.title }}</li>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: null,
      tabs: [],
    };
  },
  methods: {
    notify: function a(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped>
</style>
