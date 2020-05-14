import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter); // plugin을 실행하기 위해 초기화하는 코드

// 외부에서 사용할 수 있게 모듈화
// default 는 하나만 내보내겠다 는 의미
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login', // 초기 진입 페이지 설정
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'), // login에 해당하는 페이지만 들고온다.
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*', // 위에 없는 모든 URL에 대해 반응하겠다.
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
