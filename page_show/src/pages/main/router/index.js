
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import APP from '../App'
import MainIndex from '@/components/main/MainIndex'
import ImportantProject from '@/components/main/ImportantProject'
import ITService from '@/components/main/ITService'
import DepartmentDemeanour from '@/components/main/DepartmentDemeanour'
import ExperienceSharing from '@/components/main/ExperienceSharing'
import HelloWorld from '@/components/HelloWorld'
import ImportantDetail from '@/components/details/ImportantProjectDetails'
import DepartmentDetail from '@/components/details/DepartmentDetails'
import ExcellentDetail from '@/components/details/ExcellentDetails'
import ProjectDetail from '@/components/details/ProjectDetails'
import ArticleDetail from '@/components/details/ArticleDetails'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
       path:'/main.html',
       component:Index,
       redirect:'/main/impro'
    },
    { 
      path:'/main',
      component:Index,
      redirect:'/main/impro',
      children:[
        {
          path:'impro',
          name:'importantproject',
          component:ImportantProject
        },
        {
          path:'itservice',
          name:'itservice',
          component:ITService
        },
        {
          path:'depdem',
          name:'departmentdemeanour',
          component:DepartmentDemeanour
        },
        {
          path:'exshare',
          name:'experiencesharing',
          component:ExperienceSharing
        }
      ] 
    },
    {
      path: '/index',
      name: 'hello',
      component: HelloWorld,
    },
    {
      path:'/impro',
      name:'impro',
      component:ImportantDetail
    },
    {
      path:'/departInfo',
      component:DepartmentDetail
    },
    {
      path:'/greatInfo',
      component:ExcellentDetail
    },
    {
      path:'/proInfo',
      component:ProjectDetail
    },
    {
      path:'/articleInfo',
      component:ArticleDetail
    }    
  ]
})
