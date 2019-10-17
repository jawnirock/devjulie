<template>
  <div id="app" class="container text-center">
    <navbar></navbar>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="scss">

  // Bootstrap
  $icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/';
  @import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap';

  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  @import url('https://fonts.googleapis.com/css?family=Ubuntu:300,300i,400,400i,500,500i,700,700i');

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .8s ease;
  }
  .component-fade-enter, .component-fade-leave-to {
    opacity: 0;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    .container {
      padding-left: 7px;
    }
    .loading-gif {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  
  @media only screen and (max-width: 600px) {
    body {
      .container {
        padding-left: 7px;
        padding-right: 7px;
      }
    }
  }





</style>
