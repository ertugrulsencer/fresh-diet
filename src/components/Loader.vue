<template>
  <div class="loader" v-show="loading">
    <i class="fas fa-spinner rotate fa-3x"> </i>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
.loader {
  @include flex;
  width: 100%;
  height: 100%;
  background: rgba(black, 0.1);
  color: var(--primary);
  i {
    color: inherit;
  }
}
</style>
