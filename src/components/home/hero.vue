<template>
  <div class="section-hero">
    <div class="hero-image">
      <div class="image-src" style="background-image: url('./static/images/hero/carplus_Image_21.jpg')"></div>
    </div>
    <div class="container">
      <div class="hero-text">
        <div class="text container">
          <h1 class="startpage">
            {{ text_hero_title }}
          </h1>
          <h2 class="startpage">
            {{ text_hero_sub }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-hero',
    data() {
      return {
        text_hero_title: 'Wo gefahren wird, lauern Gefahren.',
        text_hero_sub: 'Die Kfz-Versicherung der carplus nimmt Ihr Auto in Österreich und Europa in Schutz.'
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
      background: $color-black;
  		.image-src {
  			opacity: 0.5;
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
