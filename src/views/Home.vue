<template>
  <main>
    <div class="container">
      <div class="content">
        <h1>30 Günlük Diet Planı</h1>
        <p>
          30 günlük diyet planı ile daha sağlıklı beslenin. Kilo verme diyet
          planını düzgün bir şekilde uygulayan ve günlük egzersizlerini yaparak
          zayıflayan kişilerde özgüven ve mutluluk seviyeleri artmakta,
          depresyon riski de azalmaktadır.
        </p>
        <router-link :to="{ name: 'Plans' }" class="btn-start">
          Diyete Başla
          <i class="fas fa-check"></i>
        </router-link>
      </div>
      <div class="img">
        <img height="400" class="img" src="@/assets/svg/diet.svg" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_app.scss";
main {
  .container {
    height: inherit;
    @include flex(space-between);
    .content {
      flex: 1;
      margin-right: 24px;
      @include flex(center, flex-start, column);
      h1 {
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary);
        margin-bottom: 12px;
      }
      p {
        font-weight: 500;
        margin: 12px 0;
        font-size: 1.1rem;
        line-height: 150%;
        color: var(--dark);
      }
      .btn-start {
        padding: 11px 14px;
        margin-top: 12px;
        font-weight: 800;
        font-size: 0.95rem;
        color: var(--primary);
        border: 3px solid var(--primary);
        background: var(--light);
        border-radius: 4px;
        transition: all 300ms ease-in-out;
        &:hover {
          background: var(--primary);
          color: var(--light);
        }
        i {
          margin-left: 6px;
        }
      }
    }
    .img {
      @include flex;
      flex: 1;
      margin-left: 24px;
      img {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 720px) {
  .img {
    display: none !important;
  }
}
</style>
