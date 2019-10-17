<template>
  <div class="curated container">
    <div class="loading-gif" v-if="!fadeIn">
      <img src="/static/img/loading.gif">
    </div>
      
      
      <div class="curated-item-titles" v-for="(item, index) in items" :key="'title-' + index">
        <h5 @click="activeItem = index, fadeIn = false, totalItems = 0" :class="{ active: activeItem == index }">{{ item.title }}</h5>
      </div>
      
      <div class="curated-item-images"  :class="{ fadeIn: fadeIn }" v-for="(item, index) in items" :key="'image-' + index" >
        <a :href="item.insta" target="_blank">
          <transition-group name="component-fade" mode="out-in">
            <img v-for="img in splitJoin(item.image)" v-if="activeItem == index" :src="'http://julie.pash.rocks' + img" :key="img" v-on:load="onLoaded(item.image)">
          </transition-group>
        </a>
      </div>

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
        activeItem: 0,
        fadeIn: false,
        totalItems: 0
      }
    },
    methods: {
      loadItems: function () {
        var app = this
        axios.get('http://julie.pash.rocks/api/curated').then(function (response) {
          var listaItems = response.data
          listaItems.forEach(function(item) {
              var listaItemsImages = item.image.split(', ')
              item.totalCount = listaItemsImages.length
          })
          app.items = listaItems
      })
      },
      splitJoin: function(theText){
        	return theText.split(', ');
      },
      onLoaded(image) {

        var itemCount = this.items[this.activeItem].totalCount - 1


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

.curated {
  padding-top: 60px;
  &-item {
    
    &-titles {
      display: inline-block;
      margin-right: 20px;
      margin-left: 1px;
      float: left;
      cursor: pointer; 
      h5 {
        margin-top: 7px;
        padding-bottom: 7px;
        font-size: 12px;
        font-weight: 100;
        transition: 0.3s linear;
        &.active, &:hover {
          font-weight: 500;
        }
      }
    }
    
    &-images {
      width: 100%;
      margin-bottom: 20px;
      display: block;
      opacity: 0;
      transition: opacity 1.5s;
    
      &.fadeIn {
        opacity: 1;
        height: auto;
      }
    
      
      a {
        transition: 0.3s;
        &:hover {
          opacity: 0.9;
        }
      }
    
      img {
        width: 100%;
        margin-bottom: -9.85%;
      }
    }
    
  }
}

</style>