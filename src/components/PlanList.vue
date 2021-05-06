<template>
  <section class="plan-list">
    <transition mode="out-in">
      <ul
        class="diet-items"
        key="header_plan_list"
        v-if="diet_list.length > 0 && !loading"
      >
        <li v-for="(dietItem, index) in diet_list" :key="index">
          <router-link class="diet-item" :to="`/plan/${index + 1}`">
            {{ dietItem.title }}
          </router-link>
        </li>
      </ul>
      <h1 key="header_not_found" v-else-if="!loading">
        Diet listesi bulunamadı :(
      </h1>
      <Loader key="loader" v-else :loading="loading" />
    </transition>
  </section>
</template>

<script>
import Loader from "./Loader";
export default {
  name: "PlanList",
  components: {
    Loader,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    diet_list() {
      return this.$store.getters.diet_list;
    },
  },
  created() {
    this.$store.dispatch("dietList", () => {
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
section.plan-list {
  height: 100%;
}
.diet-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  list-style: none;
  margin-top: 14px;
}
.diet-item {
  @include flex;
  border: 2px solid var(--dark);
  background: var(--primary);
  color: var(--light);
  font-weight: 700;
  font-size: 1.1rem;
  padding: 14px;
  border-radius: 4px;
}
</style>
