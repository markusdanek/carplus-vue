<template>
  <header>
    <b-navbar toggleable type="inverse" variant="">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>carplus.at</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item>Home</b-nav-item>
          <b-nav-item>carplus</b-nav-item>
          <b-nav-item>PLUS</b-nav-item>
          <b-nav-item>Partner Login</b-nav-item>
          <b-nav-item>Presse</b-nav-item>
          <b-nav-item>Formulare</b-nav-item>
          <b-nav-item>KFZ-Zulassung</b-nav-item>
          <b-nav-item>Kontakt</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="scss">
  .navbar-toggleable .navbar-nav .nav-link {
    margin-right: 2.5rem;
    color: rgba(#FFF, 0.6);
    &:hover {
      color: #FFF;
      border-bottom: 1px solid #FFF;
      padding-bottom: 0.5rem;
    }
  }
</style>
