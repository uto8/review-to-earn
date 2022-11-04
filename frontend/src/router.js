import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import WelcomePage from './views/WelcomePage.vue';
import UserShow from './views/UserShow.vue';
import PostShow from './views/PostShow.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/', component: HomePage
    },
    {
      path: '/welcome', component: WelcomePage
    },
    {
      path: '/users/:id', component: UserShow
    },
    {
      path: '/posts/:id', component: PostShow
    }
  ]
});
