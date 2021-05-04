<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div v-for="(plan, i) in diet_list" :key="i">
      {{ plan.title }}
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    diet_list() {
      return this.$store.getters.diet_list;
    },
  },
};
</script>
<style lang="scss"></style>
