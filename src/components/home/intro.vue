<template>
  <div class="home-intro">
    <div class="top">
		    <div class="sub"></div>
        <b-col class="home-intro-text" offset="1">
          <b-row>
            <b-col sm="12" md="3" lg="2">
              <h1>
                Willkommen in der carplus Vorteilswelt
              </h1>
            </b-col>
            <b-col sm="12" md="6" lg="7" offset="1">
              <h2>
                carplus ist der perfekte Partner des Kfz-Gewerbes rund um Versicherungsangelegenheiten.
                Die carplus Branchenspezialisten bieten zusammen mit den Experten der
                Wiener Städtischen Versicherung ein einzigartiges Servicenetz für Autohäuser
                und deren Kunden. carplus-Autohauspartner verfügen damit über viele exklusive
                Produkt- und Servicevorteile. <br/><br/>
                So wird Ihr Autohaus zur Vorteilswelt.
              </h2>
            </b-col>
          </b-row>
        </b-col>
	  </div>
  </div>
</template>

<script>
  export default {
    name: 'home-intro'
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .home-intro {
    .row {
      @include rem((margin: 0));
    }
    .top {
      overflow: hidden;
      max-width: 100%;
      min-height: 650px;
      background-image: linear-gradient(-180deg, #FFFFFF 0%, #F5F8FC 100%);
      box-shadow: inset 0 -10px 20px -10px rgba(0, 0, 0, 0.05);
      width: 100%;
      margin-left: 50%;
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      .sub {
        overflow: hidden;
        bottom: -48%;
        height: 100%;
        background: rgba(228, 234, 240, 0.3);
        border: 1px solid #E4EAF0;
        opacity: 1;
        position: absolute;
        right: -50%;
        width: 150%;
        -ms-transform: rotate(-12.5deg);
        transform: rotate(-12.5deg);
        z-index: -99;
      }
    }
    .home-intro-text {
      @include rem((padding: 80px 0));
      z-index: 99;
      h1 {
        @include rem((padding-bottom: 15px));
        @include rem(font-size, 46px);
    		font-family: 'FFDINWeb';
        color: $color-red-carplus;
        font-weight: bold;
        border-bottom: 15px solid $color-red-carplus;
        display: inline-block;
      }
    }
    h2 {
      @include rem(font-size, 26px);
      font-family: 'proxima nova';
      font-weight: 200;
      line-height: 150%;
    }
  }
</style>
