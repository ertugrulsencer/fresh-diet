<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="logo">
        <i class="fas fa-utensils"></i>
        Fresh Diet
      </router-link>
      <ul class="menu">
        <li>
          <router-link :to="{ name: 'Home' }" class="link"
            >Ana Sayfa</router-link
          >
        </li>
        <li>
          <router-link to="/plans" class="link">Diyet Planı</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="link"
            >Hakkımızda</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  background: #ffffff;
  box-shadow: 0 4px 18px -14px var(--dark);
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--primary);
      .fas {
        margin-right: 10px;
      }
    }
    .menu {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      li {
        &:not(:last-child) .link {
          margin-right: 14px;
        }
        .link {
          padding: 4px;
          color: var(--dark);
          font-weight: 700;
          transition: color 250ms ease-in-out;
          &.router-link-exact-active,
          &:hover {
            color: var(--primary);
          }
        }
      }
    }
  }
}
</style>
