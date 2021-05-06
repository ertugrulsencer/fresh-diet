<template>
  <main>
    <div class="container">
      <h1>Diyet Hakkında</h1>
      <hr />
      <transition mode="out-in">
        <Loader key="loader" v-if="!about" :loading="!about" />
        <section key="error" v-else-if="about.length < 0" class="error">
          <strong>Hakkımızda bulunamadı</strong>
        </section>
        <section key="about" v-else class="about">
          <p v-for="(aboutText, index) in about" :key="index">
            {{ aboutText }}
          </p>
        </section>
      </transition>
    </div>
  </main>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  name: "About",
  components: { Loader },
  computed: {
    about() {
      return this.$store.getters.about;
    },
  },
  created() {
    this.$store.dispatch("about");
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(100% - 98px);
}
h1 {
  font-size: 1.75rem;
  color: var(--dark);
  margin: 18px 0;
}
hr {
  margin: 18px 0;
}
p {
  line-height: 150%;
  color: var(--dark);
  font-weight: 600;
  text-indent: 14px;
  margin-bottom: 14px;
}
@media screen and (max-width: 720px) {
  h1 {
    font-size: 1.35rem;
  }
}
</style>
