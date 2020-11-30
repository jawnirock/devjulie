<template>
  <div class="portfolio">
  <transition name="component-fade" mode="out-in">
  <div>
    <div class="loading-gif" v-if="!fadeIn">
      <img src="/static/img/loading.gif">
    </div>

    <masonry :cols="{default: 4, 1000: 3, 700: 2, 400: 1}" :gutter="{default: '15px', 700: '5px'}" class="portfolio-grid" :class="{ fadeIn: fadeIn }">
    <router-link :to="{ name: 'PortfolioItem', params: { title: item.title, path: item.path, id: item.nid }}" v-for="(item, index) in items" :key="index" class="portfolio-grid-item">
      <div class='box' v-in-viewport>
        <img :src="'http://julie.pash.rocks' + item.image" class="portfolio-grid-item-image" v-on:load="onLoaded(item.image)" />
        <span class="portfolio-grid-item-title">{{ item.title }}</span>
      </div>
    </router-link>
  </masonry>
  </div>
  </transition>
  </div>
</template>

<script>
  import axios from 'axios'
  import VueAxios from 'vue-axios'

  export default {
    locales: require('../i18n/Hello.js'),
    data: function () {
      return {
        items: [

        ],
        fadeIn: false,
        totalItems: 0
      }
    },
    methods: {
      loadItems: function () {
        var app = this
        axios.get('http://julie.pash.rocks/api/portfolio').then(function (response) {
          var listaItems = response.data
          app.items = listaItems
        })
      },
      onLoaded(image) {
        var itemCount = this.items.length - 2
        if (this.totalItems === itemCount) {
          this.fadeIn = true;
          console.log("fadeIn")
        } else {
          this.totalItems++;
          console.log(itemCount + " " + this.totalItems)
        }
      }
    },
    mounted () {
      this.loadItems()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.portfolio {
  padding-top: 70px;

  &-grid {
    margin-left: -10px !important;
    opacity: 0;
    transition: opacity 1.5s;
    height: 1px;
    overflow: hidden;

    &.fadeIn {
      opacity: 1;
      height: auto;
      overflow: auto;
    }

    .box {
      &.in-viewport {
          opacity: 1;
          margin-top: 0;
          transition: linear 1s;
          transition-delay: 1s;
      }
      &.below-viewport {
        opacity: 0;
        margin-top: 10px;
        &.in-viewport {
          opacity: 1;
          margin-top: 0;
          transition: linear 1s;
          transition-delay: 1s;
        }
      }
    }

    &-item {

      position: relative;
      display: block;
      cursor: pointer;
      &-image {
        transition: linear 0.3s;
      }
      &-title {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        color: black;
        opacity: 0;
        transition: linear 0.3s;
        font-size: 13px;
      }
      &:hover {
        .portfolio-grid-item-image {
          opacity: 0.3;
        }
        .portfolio-grid-item-title {
          opacity: 1;
        }
      }
    }
  }
}

img {
  width: 100%;
  margin-bottom: 15px;
}

@media only screen and (max-width: 600px) {
  .portfolio {
    &-grid {
      margin-left: 0px !important;
      &>div {
        border-width: 0px 2px 0px 4px !important;
      }
    }
  }
  img {
    margin-bottom: 6px;
  }
}

</style>
