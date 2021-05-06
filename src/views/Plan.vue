<template>
  <main>
    <transition mode="out-in">
      <div class="diet-detail" key="diet" v-if="!loading">
        <div class="container">
          <h1 class="header">
            {{ diet_item.title }}
          </h1>
          <section v-if="diet_item.detail.breakfast" class="breakfast">
            <header class="list-header">
              <strong>Kahvaltı</strong>
            </header>
            <ul class="list-breakfast">
              <li
                v-for="(breakfast, index) in diet_item.detail.breakfast"
                :key="index"
                class="list-item"
              >
                {{ breakfast }}
              </li>
            </ul>
          </section>
          <section v-if="diet_item.detail.dinner" class="dinner">
            <header class="list-header">
              <strong>Atıştırmalık</strong>
            </header>
            <ul class="list-dinner">
              <li
                v-for="(dinner, index) in diet_item.detail.dinner"
                :key="index"
                class="list-item"
              >
                {{ dinner }}
              </li>
            </ul>
          </section>
          <section v-if="diet_item.detail.lunch" class="lunch">
            <header class="list-header">
              <strong>Öğle Yemeği</strong>
            </header>
            <ul class="list-lunch">
              <li
                v-for="(lunch, index) in diet_item.detail.lunch"
                :key="index"
                class="list-item"
              >
                {{ lunch }}
              </li>
            </ul>
          </section>
          <section v-if="diet_item.detail.snack" class="snack">
            <header class="list-header">
              <strong>Akşam Yemeği</strong>
            </header>
            <ul class="list-snack">
              <li
                v-for="(snack, index) in diet_item.detail.snack"
                :key="index"
                class="list-item"
              >
                {{ snack }}
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Loader key="loader" v-else :loading="loading" />
    </transition>
  </main>
</template>

<script>
import Loader from "@/components/Loader";
export default {
  name: "Plan",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.$store.dispatch("dietItem", {
      id: this.$route.params.id,
      callback: () => {
        this.loading = false;
      },
    });
  },
  computed: {
    diet_item() {
      return this.$store.getters.diet_item;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: var(--primary);
  margin: 24px 0;
  font-size: 1.75rem;
  font-weight: 800;
}
section {
  border: 2px solid var(--primary);
  border-radius: 4px;
  padding: 14px 18px;
  margin-bottom: 14px;
  header.list-header {
    margin-bottom: 8px;
    font-size: 1.1rem;
    color: var(--dark);
  }
  ul {
    list-style-position: inside;
    list-style-type: circle;
    li {
      color: var(--dark);
      line-height: 150%;
    }
  }
}
</style>
