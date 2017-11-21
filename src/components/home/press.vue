<template>
  <div class="home-press">
    <b-col sm="10" offset="1">
      <h1>Letzte Meldungen</h1>
      <b-row>
          <b-col lg="4" class="item" v-for="article in articles" :key="article.id">
            <div class="image">
              <img :src="article.img" alt="img">
            </div>
            <b-col sm="10" class="text">
              <div class="title">
                <h3>{{article.title}}</h3>
              </div>
              <div class="desc">
                <p>{{article.desc}}</p>
              </div>
              <div class="date">
                <p>{{article.date}}</p>
              </div>
            </b-col>
        </b-col>
      </b-row>
      <div class="more">
        <b-button :size="size" :variant="outline-success" href="#">
          Mehr Meldungen
        </b-button>
      </div>
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
            title: 'Neu seit November',
            desc: 'Vorteilhafte Wrack-Ankaufsoption für carplus-Partner',
            date: 'November 2017',
            img: 'https://blog.frame.io/wp-content/uploads/2017/11/headphones-video-editor-696x414.jpg'
          },
          {
            id: 2,
            title: 'Aktueller Tipp',
            desc: 'Kombiprodukt Vollkasko + GW Garantie!',
            date: 'Oktober 2017',
            img: 'https://blog.frame.io/wp-content/uploads/2017/10/videoeditor-audio-696x414.jpg'
          },
          {
            id: 3,
            title: 'Aktueller Tipp',
            desc: 'REISEKASKO gleich hier online abschließen!',
            date: 'Oktober 2017',
            img: 'https://blog.frame.io/wp-content/uploads/2017/10/walmart-vertical-696x414.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/util/util.scss";
  .home-press {
    @include rem((padding: 80px 0));
    background: #F3F4F6;
    h1 {
      @include rem((margin-bottom: 40px));
      font-family: 'FFDINWeb';
      font-weight: bold;
      display: inline-block;
      color: $color-black;
    }
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
        position: relative;
        top: -50px;
        text-align: center;
        -webkit-box-shadow: 10px 10px 51px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 10px 10px 51px 0px rgba(0,0,0,0.2);
        box-shadow: 10px 10px 51px 0px rgba(0,0,0,0.2);
        .title {
          h3 {
            font-weight: bold;
          }
        }
        .desc {
          p {

          }
        }
        .date {
          p {
            @include rem(font-size, 14px);
          }
        }
      }
    }
    .more {
      text-align: right;
      a {
        @extend %ghost-button-gray;
      }
    }
  }
</style>
