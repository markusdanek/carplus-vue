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
          <b-nav-item>Autohaus plus</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
