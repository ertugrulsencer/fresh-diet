<template>
  <main class="plan">
    <transition mode="out-in">
      <div class="diet-detail" key="diet" v-if="!loading">
        <div class="container">
          <h1 class="header">
            {{ diet_item.title }}
          </h1>
          <BreakfastList :list="diet_item.detail.breakfast || []" />
          <DinnerList :list="diet_item.detail.dinner || []" />
          <LunchList :list="diet_item.detail.lunch || []" />
          <SnackList :list="diet_item.detail.snack || []" />
        </div>
      </div>
      <Loader key="loader" v-else :loading="loading" />
    </transition>
  </main>
</template>

<script>
import Loader from "@/components/Loader";
import BreakfastList from "@/components/lists/Breakfast";
import DinnerList from "@/components/lists/Dinner";
import LunchList from "@/components/lists/Lunch";
import SnackList from "@/components/lists/Snack";
export default {
  name: "Plan",
  components: {
    Loader,
    BreakfastList,
    DinnerList,
    LunchList,
    SnackList,
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

<style lang="scss">
.plan .header {
  color: var(--primary);
  margin: 24px 0;
  font-size: 1.75rem;
  font-weight: 800;
}
.plan .diet-detail section {
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
      font-weight: 600;
    }
  }
}
</style>
