import LandingPageView from './components/LandingPageView';
import HomePageView from './components/HomePageView';
import UserPageView from './components/UserPageView';

export default [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPageView
  },
  {
    path: '/home',
    name: 'home-page',
    component: HomePageView
  },
  {
    path: '/users/:username',
    name: 'user-page',
    component: UserPageView
  },
  {
    path: '*',
    redirect: '/'
  }
]
