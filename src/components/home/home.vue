<template>
  <div class="section-hero">
    <div class="hero-image">
      <div class="image-src" style="background-image: url('./static/images/hero/hero-home-1.jpg')"></div>
    </div>
    <div class="container">
      <div class="hero-text">
        <div class="text container">
          <h1 class="startpage">
            {{heroWelcome}}
          </h1>
          <h2 class="startpage">
            {{heroText}}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        heroWelcome: 'Willkommen in der carplus Vorteilswelt',
        heroText: `carplus ist der perfekte Partner des Kfz-Gewerbes rund um
        Versicherungsangelegenheiten. Die carplus Branchenspezialisten bieten
        zusammen mit den Experten der Wiener Städtischen Versicherung ein einzigartiges
        Servicenetz für Autohäuser und deren Kunden. carplus-Autohauspartner verfügen
        damit über viele exklusive Produkt- und Servicevorteile. So wird Ihr Autohaus
        zur Vorteilswelt.`
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";

  .section-hero {
  	@extend %hero;
  	height: 600px;
    .hero-image {
  		top: -80px;
  		.image-src {
  			opacity: 0.2;
  		}
  	}
    .hero-text {
      height: 600px;
      font-family: "proxima-nova";
      h1.startpage {
    		@include rem(font-size, 56px);
    		line-height: 56px;
    		font-family: "proxima-nova";
        font-weight: bold;
        // font-family: 'Kreon';
    		// font-family: 'Open Sans';
    	}
    	h2.startpage {
    		@include rem(font-size, 24px);
    		font-family: "proxima-nova";
    		font-weight: lighter;
    	}
    }
  }
</style>
