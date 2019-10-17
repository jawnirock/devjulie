<template>
  <div class="about">
        
  <div class="about-container desktop">
    <div class="about-gif about-column">
      <a  href="mailto:nativecreative@gmail.com" target="_blank">
        <img src="/static/img/about/endlessspin.gif">
      </a>
    </div>
    <div class="about-email">
      <a  href="mailto:nativecreative@gmail.com" target="_blank">
        julie / nativecreative@gmail.com
      </a>
    </div>    
    <div :settings="settings" class="about-text" :class="{ second: isSecond}">
        <div class="about-text-item about-column">
          <p>
            Luxury / Lifestyle / Design / Interiors / Architecture / Furniture / Fashion / Jewellery / Perfume / Accessories / Photography / Art / Audio Video / Film / Culture / Hotels / Cuisine / Cosmetics / Retail / Eyewear / Eco Concepts / Branding / Communications / Senior Writer / Editorials / SoMe Content / Visual Storytelling / Magazines / Websites / Image Curation / Profiles / PR Campaigns / Launches / Slogans / Naming / Coffee Table Books / Aesthetic Experiences
            <br>
            <span @click="isSecond = true">▼</span>
          </p>
        </div>
        <div class="about-text-item about-column">
          <p>
            I’m passionate about bringing elegance and intelligence to anything in the aesthetic arena. Creating memorable moments with meaning and momentum. Drawing on my extensive expertise in branding and communications from New York and my experience as Creative Director at several ad agencies in Europe, I create compelling concepts, copy and content that resonate with a global mix of savvy consumers. As a Senior Communications Consultant, companies turn to me to revitalise brands, where I delve into the DNA to define an approach that truly echoes the soul of the brand. As a Communications Manager, I curate content via visual storytelling, ensuring brand continuity with images and associations. As a Senior Copywriter, I know what it takes to instantly convey ideas with emotion. As a journalist, I write thought-provoking editorials for magazines and brands alike. It’s all about captivating your audience. And telling the truth in an interesting way ...
            <span class="second" @click="isSecond = false">▲</span>
          </p>
        </div>
    </div>
  </div>

  <div class="about-container mobile" :class="{ fadeIn: fadeIn }">
    <div class="about-gif about-column">
      <a  href="mailto:nativecreative@gmail.com" target="_blank">
        <img src="/static/img/about/endlessspin.gif">
      </a>
    </div>
    <div class="about-email">
      <a  href="mailto:nativecreative@gmail.com" target="_blank">
        julie / nativecreative@gmail.com
      </a>
    </div>    
    <div :settings="settings" class="about-text" :class="{ second: isSecond}">
        <div class="about-text-item about-column">
          <p>
              <img src="/static/img/about/one-t2.png" v-on:load="onLoaded(/static/img/about/one-t.png)">
            <span @click="isSecond = true">▼</span>
          </p>
        </div>
        <div class="about-text-item about-column">
          <p>
              <img src="/static/img/about/two-t2.png" v-on:load="onLoaded(/static/img/about/one-t.png)">
            <span class="second" @click="isSecond = false">▲</span>
          </p>
        </div>
    </div>
  </div>
  

  </div>
</template>

<script>

  import vueCustomScrollbar from 'vue-custom-scrollbar'

  export default {
    locales: require('../i18n/Hello.js'),
    components: {
      vueCustomScrollbar      
    },
    data: function () {
      return {
        isSecond: false,
        fadeIn: false,
        totalItems: 0
      }
    },
    methods: {
      onLoaded(image) {
        var itemCount = 1
        if (this.totalItems === itemCount) {
          this.fadeIn = true;
          console.log("fadeIn")
        } else {
          this.totalItems++;
          console.log(itemCount + " " + this.totalItems)
        } 
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

body {
.about {
    position: absolute;
    top: 60px;
    height: calc(100vh - 60px);
    width: 100%;
    overflow: hidden;
    left: 0;
  
  
  
  &-container {
    max-width: 1140px;
    height: calc(100% - 60px);
    margin: 0 auto;
    position: relative;
    &.mobile {
      display: none;
    }
  }
  
  
  &-wrapper {
    width: 100%;
    height: 50%;
  }
  
  &-gif {
    background: black;
    width: 20%;
    position: absolute;
    top: 0px;
    left: 0;
    height: calc(100vh - 0px);
    z-index: 99;

    img {
      width: 85%;
    }
  }


  &-email {
    width: 7%;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 20%;
    height: calc(100vh - 0px);
    background: #696969;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 109;
    font-weight: 900;
    
    a {
      transform: rotate(-90deg);
      color: black;
      display: block;
      white-space: nowrap;
      -ms-transform-origin: 72px 46px;
    }

    &:hover {
      color: black;
    }
  }


  &-text {
    z-index: 90;
    width: 100%;
    padding-left: 27%;
    height: 100vh;
    position: absolute;
    overflow: hidden;
    background: #696969;
    
    &.second {
      .about-text-item {
        transform: translateY(-100%);
      }
    }
    
    &-item {
      height: 100%;
      transition: 0.4s linear;
    }
    
    p {
      color: white;
      font-weight: 900;
      text-align: justify;
      padding: 0 6% 0 0px;
      font-size: 12px;
      letter-spacing: 1.5px;
      margin: 0;
      margin-top: 10px;
      span {
        text-align: center;
        display: block;
        padding-top: 5px;
        font-size: 14px;
        cursor: pointer;
        &.second {
          padding-top: 0;
          margin-top: -5px;
        }

      }
    }
  }
  &-column {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}  
}


@media only screen and (max-width: 600px) {

body {
  .about {
    
    &-container {
      &.desktop {
        display: none;
      }
      &.mobile {
        display: block;
        opacity: 0;
        &.fadeIn {
          opacity: 1;
        }

      }
    }
    
    &-gif {
      height: calc(100vh - 60px);
      width: 30%;
      img {
        width: 110%;
        margin-left: -5%;
        margin-top: -20px;
      }
    }
    
    &-email {
      height: calc(100vh - 60px);
      left: 30%;
      a {
        margin-left: -102%;
        color: white;
        font-size: 11px;
        margin-top: -20px;
      }
    }
    
    &-text {
      padding-right: 0%;
      padding-left: 28%;
      height: calc(100vh - 60px);
      
      &-item {
        transition: 1s linear;
        margin-top: -5px;
      }
      p {
        font-size: 10px;
        letter-spacing: 0px;
        padding: 0;
        span {
          text-align: left;
          padding-left: 14.5%;
          padding-top: 0;
          &.second {
            padding-left: 13%;
            margin-top: 0;
          }
        }
      }
    }
  }
}
  
}



</style>