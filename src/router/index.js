import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import FindFleets from '@/components/FindFleets'
import AddNewFleet from '@/components/AddNewFleet'
import MyFleets from '@/components/MyFleets'
import MyCompany from '@/components/MyCompany'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
            path: 'find-fleet',
            name: 'FindFleets',
            component: FindFleets
        },
        {
          path: 'add-fleet',
          name: 'AddNewFleet',
          component: AddNewFleet
        },
        {
          path: 'my-fleets',
          name: 'MyFleets',
          component: MyFleets
        },
        {
          path: 'my-company',
          name: 'MyCompany',
          component: MyCompany
        }
      ]
    }
  ]
})
