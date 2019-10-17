<template>
  <nav class="nav">
    <div class="nav-wrap">
        <div class="nav-title">
          <router-link to="/" class="nav-item nav-link"><h3>Julie</h3></router-link>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-item nav-link"> Portfolio </router-link>
          <router-link to="/branding" class="nav-item nav-link"> Branding </router-link>
          <router-link to="/content" class="nav-item nav-link">Content </router-link>
          <router-link to="/about" class="nav-item nav-link"> About </router-link>
        </div>
      </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">

  .nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: white;
    z-index: 999;
    font-weight: 900;
      
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      height: 60px;
      padding-bottom: 10px;
      margin: 0 auto;
      max-width: 1170px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
    
    &-title {
      a {
        text-decoration: none;
        color: black;
      }
      
      h3 {
        font-size: 14px;
        margin: 0;
        font-weight: 900;
        padding-bottom: 3px;
        border-bottom: 1px solid white;

        &:hover {
          border-bottom: 1px solid black;
        }

      }
    }
    &-links {
      a {
        display: inline-block;
        color: black;
        margin-left: 15px;
        font-size: 14px;
        border-bottom: 1px solid white;
          text-decoration: none  !important;
        
        &:hover, &.router-link-exact-active {
          border-bottom: 1px solid black;
          color: black;
        }
      }

    }
  }

  @media only screen and (max-width: 600px) {
    .nav {
      
      &-wrap {
        padding-bottom: 20px;
      }
      
      &-title {
        h3 {
          font-size: 11px;
        }
      }
      &-links {
        a {
          font-size: 11px;
          margin-left: 5px;
        }
      }
    } 
  }



</style>