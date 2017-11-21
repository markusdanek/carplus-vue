<template>
  <div class="home-partner">
    <div class="left">
      <div class="inner">
        Lorem Ipsum
      </div>
    </div>
    <div class="partner-image">
      <div class="diagonal"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-partner'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .home-partner {
    background: $color-white;
    display: table;
    width: 100%;
    .left {
      width: 48%;
      display: table-cell;
      background: #182344;
      .inner {
        max-width: 530px;
        min-height: 500px;
        padding: 75px 40px;
        float: right;
      }
    }
    .partner-image {
      background-image: url(https://www.lever.co/hubfs/hilary_webinar_photo%20%281%29-1.jpg?t=1511225165912);
      width: 50%;
      background-size: cover;
      display: table-cell;
      position: relative;
      .diagonal {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background-image: url(https://cdn2.hubspot.net/hubfs/463671/Hero_images/hero-diagonal.svg?t=1508292770192);
        background-repeat: no-repeat;
        background-position: bottom left;
      }
    }
  }
</style>
