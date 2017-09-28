<template>
  <div class="section-hero">
    <div class="hero-image">
      <div class="image-src" style="background-image: url('./static/images/hero/hero-home-1.png')"></div>
    </div>
    <div class="container">
      <div class="hero-text">
        <div class="text container">
          <h1 class="startpage">
            {{ text_hero_title }}
          </h1>
          <h2 class="startpage">
            {{ text_hero_desc_1 }}
            <br />
            {{ text_hero_desc_2 }}
            <br /> <br />
            {{ text_hero_desc_4 }}
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
        text_hero_title: 'Willkommen in der carplus Vorteilswelt',
        text_hero_desc_1: `carplus ist der perfekte Partner des Kfz-Gewerbes rund um
          Versicherungsangelegenheiten.`,
        text_hero_desc_2: `Die carplus Branchenspezialisten bieten
          zusammen mit den Experten der Wiener Städtischen Versicherung ein einzigartiges
          Servicenetz für Autohäuser und deren Kunden.`,
        text_hero_desc_3: `carplus-Autohauspartner verfügen damit über viele
          exklusive Produkt- und Servicevorteile.`,
        text_hero_desc_4: `So wird Ihr Autohaus zur Vorteilswelt.`
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
      background-color: transparent;
  		.image-src {
  			opacity: 1;
  		}
  	}
    .hero-text {
      height: 600px;
      h1.startpage {
    		@include rem(font-size, 56px);
        font-family: "proxima-nova";
        // font-family: 'Kreon';
    		// font-family: 'Open Sans';
    		line-height: 56px;
        font-weight: bold;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    	}
    	h2.startpage {
    		@include rem(font-size, 24px);
        @include rem((padding: 0 120px));
        font-family: "proxima-nova";
        // font-family: 'Kreon';
    		// font-family: 'Open Sans';
    		font-weight: lighter;
        text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    	}
    }
  }
</style>
