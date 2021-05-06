<template>
  <section v-if="list" class="breakfast">
    <header class="list-header">
      <strong>Kahvaltı</strong>
    </header>
    <ul class="list-breakfast">
      <li v-for="(breakfast, index) in list" :key="index" class="list-item">
        {{ breakfast }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "BreakfastList",
  props: {
    list: {
      type: Array,
    },
  },
};
</script>
