import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Portfolio from './components/Portfolio'
import PortfolioItem from './components/PortfolioItem'
import Branding from './components/Branding'
import About from './components/About'
import Curated from './components/Curated'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Portfolio, name: 'portfolio'},
    {
          path: '/portfolio/:id/:path',
          component: PortfolioItem,
          name: "PortfolioItem" 
        },
    { path: '/branding', component: Branding, name: 'branding'},
    { path: '/about', component: About, name: 'about'},
    { path: '/content', component: Curated, name: 'curated'},
    ]
})
