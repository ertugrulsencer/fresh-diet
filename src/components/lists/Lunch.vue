<template>
  <section v-if="list" class="lunch">
    <header class="list-header">
      <strong>Öğle Yemeği</strong>
    </header>
    <ul class="list-lunch">
      <li v-for="(lunch, index) in list" :key="index" class="list-item">
        {{ lunch }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      require: true,
    },
  },
};
</script>
