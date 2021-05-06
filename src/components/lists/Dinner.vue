<template>
  <section v-if="list" class="dinner">
    <header class="list-header">
      <strong>Atıştırmalık</strong>
    </header>
    <ul class="list-dinner">
      <li v-for="(dinner, index) in list" :key="index" class="list-item">
        {{ dinner }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "DinnerList",
  props: {
    list: {
      type: Object,
      require: true,
    },
  },
};
</script>
