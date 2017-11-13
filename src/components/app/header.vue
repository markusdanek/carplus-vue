<template>
  <header>
    <b-navbar toggleable="md" type="dark" sticky>
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="#">
        <img src="/static/images/carplus_logo_white.svg" height="40" lt="carplus">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">carplus</b-nav-item>
          <b-nav-item href="#">PLUS Angebote</b-nav-item>
          <b-nav-item href="#">Partner Login</b-nav-item>
          <b-nav-item href="#">Presse</b-nav-item>
          <b-nav-item href="#">Formulare</b-nav-item>
          <b-nav-item href="#">KFZ-Zulassung</b-nav-item>
          <b-nav-item href="#">Kontakt</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style lang="scss">
  .navbar-dark .navbar-nav .nav-link {
    color: rgba(#FFF, 1);
  }
  .collapse.show {
    background: $color-black-medium;
  }
  .nav-item {
    margin-right: 2rem;
    color: rgba(#FFF, 1);
    border-bottom: 2px solid transparent;
    padding-bottom: 0.5rem;
    &:hover {
      color: rgba(#FFF, 1);
      border-bottom: 2px solid #FFF;
      padding-bottom: 0.5rem;
    }
  }
</style>
