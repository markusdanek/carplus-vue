<template>
  <div class="home-press">
    <b-col sm="10" offset="1">
    <b-row>
        <b-col lg="3" class="item" v-for="article in articles" :key="article.id">
          <div class="image">
            <img :src="article.img" alt="img">
          </div>
          <b-col sm="10" class="text">
            <h3>{{article.title}}</h3>
            <p>{{article.desc}}</p>
          </b-col>
      </b-col>
    </b-row>
    </b-col>
  </div>
</template>

<script>
  export default {
    name: 'home-press',
    data () {
      return {
        articles: [
          {
            id: 1,
            title: 'Wechsel in der carplus-Geschäftsleitung',
            desc: 'Lesen Sie hier mehr!',
            img: 'https://blog.frame.io/wp-content/uploads/2017/11/headphones-video-editor-696x414.jpg'
          },
          {
            id: 2,
            title: 'Aktueller Tipp',
            desc: 'Kombiprodukt Vollkasko + GW Garantie!',
            img: 'https://blog.frame.io/wp-content/uploads/2017/10/videoeditor-audio-696x414.jpg'
          },
          {
            id: 3,
            title: 'Aktueller Tipp',
            desc: 'REISEKASKO gleich hier online abschließen!',
            img: 'https://blog.frame.io/wp-content/uploads/2017/10/walmart-vertical-696x414.jpg'
          },
          {
            id: 4,
            title: 'Wechsel in der carplus-Geschäftsleitung',
            desc: 'Lesen Sie hier mehr!',
            img: 'https://blog.frame.io/wp-content/uploads/2017/11/17-10-29-palm-trees-header-696x414.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";
  .home-press {
    // @include rem((padding: 60px 0));
    background: rgb(238, 242, 247);
    .item {
      .image {
        img {
          width: 100%;
          height: auto;
        }
      }
      .text {
        @include rem((padding: 20px));
        background: $color-white;
        // min-height: 200px;
        position: relative;
        top: -50px;
        h3 {
          font-weight: bold;
        }
        p {
          text-decoration: underline;
        }
      }
    }
  }
</style>
