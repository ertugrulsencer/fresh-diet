<template>
  <div class="wrapper">
    <AppHeader />
    <transition mode="out-in">
      <RouterView />
    </transition>
    <AppFooter />
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
export default {
  name: "App",
  components: {
    AppHeader: Header,
    AppFooter: Footer,
  },
};
</script>
<style lang="scss"></style>
