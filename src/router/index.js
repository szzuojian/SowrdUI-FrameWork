import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'
import welcome from '@/components/Welcome'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'mainFrame',
    component: welcome
  }]

function registMenuPath (menudata) {
  console.log('注册中.....')
  for (let i = 0; i < menudata.length; ++i) {
    console.log('循环' + i)
    let item = menudata[i]
    if (item.childNodes && item.childNodes.length > 0) {
      console.log('循环' + i + '(' + item.name + '):有子节点!')
      registMenuPath(item.childNodes)
    } else {
      console.log('循环' + i + '(' + item.name + '):无子节点!')
      routes.push({
        path: `/${item.router}`,
        name: item.name,
        component: () => import(`@/components/${item.router}`)
      })
      console.log(item.name + '（' + item.router + '）已注册!')
    }
  }
}

registMenuPath(menus)

export default new Router({
  routes
})
