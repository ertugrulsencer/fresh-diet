<template>
  <section v-if="list" class="snack">
    <header class="list-header">
      <strong>Akşam Yemeği</strong>
    </header>
    <ul class="list-snack">
      <li v-for="(snack, index) in list" :key="index" class="list-item">
        {{ snack }}
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
