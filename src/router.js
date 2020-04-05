import Vue from 'vue'
import Router from 'vue-router'
import i18n from './i18n'
import store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      alias: ['/作品集'],
      name: 'portfolio',
      component: () =>
        import(/* webpackChunkName: "portfolio" */ './views/Portfolio')
    },
    {
      path: '/contact',
      alias: ['/联络'],
      name: 'contact',
      component: () =>
        import(/* webpackChunkName: "contact" */ './views/Contact')
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: () =>
        import(/* webpackChunkName: "legal" */ './views/Legal/Conditions')
    },
    {
      path: '/confidentialite',
      alias: '/privacy',
      name: 'privacy',
      component: () =>
        import(/* webpackChunkName: "legal" */ './views/Legal/Privacy')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () =>
        import(/* webpackChunkName: "admin" */ './views/Admin/Home'),
      meta: {
        admin: true
      }
    },
    {
      path: '/admin/connexion',
      alias: '/admin/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "admin" */ './views/Admin/Login'),
      meta: {
        guest: true
      }
    },
    {
      path: '/admin/site/:websiteId',
      alias: '/admin/website/:websiteId',
      name: 'websitePage',
      component: () =>
        import(/* webpackChunkName: "admin" */ './views/Admin/WebsitePage'),
      meta: {
        admin: true
      }
    },
    {
      path: '/admin/mon-compte',
      alias: '/admin/my-account',
      name: 'myAccount',
      component: () =>
        import(/* webpackChunkName: "admin" */ './views/Admin/MyAccount'),
      meta: {
        admin: true
      }
    },
    {
      path: '*',
      name: 'error404',
      component: () =>
        import('./views/Error404')
    }
  ]
})

router.beforeEach((to, from, next) => {
  i18n.locale = store.state.locale
  document.title = i18n.t('pageTitles.' + to.name)
  const admin = to.meta.admin
  const guest = to.meta.guest
  if(admin) {
    if(!store.state.ssid) {
      next('/' + i18n.t('links.admin.login'))
    }
    else {
      next()
    }
  }
  if(guest) {
    if(store.state.ssid) {
      next('/' + i18n.t('links.admin.home'))
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router