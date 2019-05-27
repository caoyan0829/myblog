import Home from './components/home/home.vue'
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
    path: '/info/:id',
    name: 'info',
    component: Info
  }
]
export default routers
