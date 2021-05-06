<template>
  <footer class="footer">
    <div class="container">
      <p><b>Fresh Diet</b> 2021 &copy; Tüm hakları saklıdır</p>
      <div class="social-media">
        <a target="_blank" href="https://youtube.com/" class="link">
          <i class="fab fa-youtube"></i>
        </a>
        <a target="_blank" href="https://facebook.com/" class="link">
          <i class="fab fa-facebook"></i>
        </a>
        <a target="_blank" href="https://twitter.com/" class="link">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_mixins.scss";
footer.footer {
  background: var(--dark);
  height: 56px;
  color: var(--light);
  .container {
    @include flex(space-between);
    height: 100%;
    p {
      font-size: 0.9rem;
      b {
        color: var(--primary);
      }
    }
    .social-media {
      @include flex(flex-end, center);
      .link {
        @include flex;
        width: 28px;
        height: 28px;
        color: var(--dark);
        background: var(--light);
        border-radius: 4px;
        transition: color 300ms ease-in-out;
        &:not(:last-child) {
          margin-right: 8px;
        }
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
