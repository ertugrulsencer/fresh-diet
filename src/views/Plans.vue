<template>
  <main>
    <div class="container">
      <h3 class="header">30 Günlük Plan</h3>
      <hr />
      <PlanList />
    </div>
  </main>
</template>

<script>
import PlanList from "../components/PlanList.vue";
export default {
  name: "Plans",
  components: {
    PlanList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 85%;
}
.header {
  font-weight: 700;
  color: var(--primary);
  padding-top: 24px;
  font-size: 1.25rem;
}
hr {
  margin: 12px 0;
}
</style>
