<template>
<div>
    <div class="loading-gif" v-if="!fadeIn">
      <img src="/static/img/loading.gif">
    </div>

  <div class="portfolioItem container" :class="{ fadeIn: fadeIn }">

      <div class="portfolioItem-item" v-for="(item, index) in items" :key="index">
        <img class="portfolioItem-item-img" :src="'http://julie.pash.rocks' + item.image" @click="currentZoom = (index + 1)" v-on:load="onLoaded(item.image)">
        <zoom-on-hover :scale="2" :img-normal="'http://julie.pash.rocks' + item.image"  v-on:load="onLoaded(item.image)"></zoom-on-hover>
      </div>

  </div>
</div>
</template>

<script>

  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import vZoom from 'vue-zoom'

  export default {
    locales: require('../i18n/Hello.js'),
    components: {vZoom},
    data: function () {
      return {
        items: [
        ],
        currentZoom: false,
        fadeIn: false,
        totalItems: 0
      }
    },
    methods: {
      loadItems: function () {
        var app = this
        var id = app.$route.params.id
        axios.get('http://julie.pash.rocks/api/portolio/item/' + id).then(function(response) {
          var listaItems = response.data
          app.items = listaItems
        })
      },
      onLoaded(image) {
        var itemCount = this.items.length - 1
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

.portfolioItem {
  padding-top: 70px;
  padding-top: 60px;
  opacity: 0;
  transition: opacity 1.5s;

  &.fadeIn {
    opacity: 1;
    height: auto;
  }
  &-item {
    width: 100%;
    margin-bottom: 20px;
    &-img {
      display: none;
    }
    img {
      cursor: zoom-in;
    }

  }
}

@media only screen and (max-width: 800px) {
  .portfolioItem  {
    &.container {
      padding: 0;
      padding-top: 70px;
      }
    &-item-zoom {
      display: none !important;
    }

  }
}

</style>
