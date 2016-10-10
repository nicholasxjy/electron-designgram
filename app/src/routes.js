import LandingPageView from './components/LandingPageView';
import HomePageView from './components/HomePageView';

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
    path: '*',
    redirect: '/'
  }
]
