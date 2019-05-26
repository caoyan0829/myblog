import Home from './components/home/Home.vue'
import Info from './components/info/info.vue'

const routers = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]
export default routers
