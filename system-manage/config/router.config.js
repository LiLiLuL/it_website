export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/article/all/list' },
      //article-manage
      {
        path: '/article',
        name: 'article',
        icon: 'unordered-list',
        routes: [
          {
            path: '/article/all',
            name: 'all',
            component: './Articles/All/ReleasedArticles',
            routes: [
              {
                path: '/article/all',
                redirect: '/article/all/list'
              },
              {
                path: '/article/all/list',
                component: './Articles/All/List'
              },
              {
                path: '/article/all/operation',
                component: './Articles/All/Operation'
              }
            ]
          },
          {
            path: '/article/new',
            name: 'new',
            component: './Articles/NewEssay'
          },
          {
            path: '/article/draft',
            name: 'draft',
            component: './Articles/Draft'
          }
        ]
      },
      //carousel-manage
      {
        path: '/carousel',
        name: 'carousel',
        icon: 'fund',
        component: './Carousel/index'

      },
      //demeanour-manage
      {
        path: '/demeanour',
        name: 'demeanour',
        icon: 'coffee',
        component: './DepartmentDemeanour/Demeanour'

      },
      //notification-manage
      {
        path: '/notification',
        name: 'notifications',
        icon: 'notification',
        routes: [
          {
            path: '/notification/notifi',
            name: 'notification',
            component: './Notification/Notification'
          },
          {
            path: '/notification/notice',
            name: 'notice',
            component: './Notification/Notice'
          }
        ]
      },

      //project-manage
      {
        path: '/project',
        name: 'project',
        icon: 'book',
        routes: [
          {
            path: '/project/summary',
            name: 'summary',
            component: './Project/Summary'
          },
          {
            path: '/project/pool',
            name: 'pool',
            component: './Project/Pool'
          },
          {
            path:'/project/detail/:id',
            name:'detail',
            component:'./Project/ProjectDetail',
            hideInMenu:true,
          },
          {
            path:'/project/detail/edit/:id',
            name:'edit',
            component:'./Project/ProjectEdit',
            hideInMenu:true
          },
          {
            path:'/project/create',
            name:'create',
            component:'./Project/ProjectCreate',
            hideInMenu:true
          }
        ]
      },
      //department-manage
      {
        path: '/department',
        name: 'department',
        icon: 'cluster',
        routes: [
          {
            path: '/department/add',
            name: 'addDepartment',
            component: './DepartmentManage/DepartmentAdd'
          },
          {
            path: '/department/user',
            name: 'usermanage',
            component: './DepartmentManage/UserManage'
          }

        ]
      },
      //talent-manage
      {
        path: '/talent',
        name: 'talent',
        icon: 'star',
        component: './TalentManagement/Talent'
      },
      //system-manage
      {
        path: '/system', name: 'system', icon: 'appstore', routes: [
          {
            path: '/system/comment',
            name: 'comment',
            component: './SystemPages/CommentManage'
          }
        ]
      },
      //user-manage
      {
        path: '/usermanage',
        name: 'usermanage',
        icon: 'team',
        routes: [
          {
            path: '/usermanage/usercenter',
            name: 'usercenter',
            component: './UserManage/UserCenter'
          },
          {
            path: '/usermanage/usersetting',
            name: 'usersetting',
            component: './UserManage/Usersetting'
          }
        ]
      },
      //personal message
      {
        name: 'personal',
        icon: 'user',
        path: '/personal',
        routes: [
          {
            path: '/personal/center',
            name: 'center',
            component: './Personal/Center',
          },
        ]
      },

      // // dashboard
      // { path: '/', redirect: '/dashboard/analysis' },
      // {
      //   path: '/dashboard',
      //   name: 'dashboard',
      //   icon: 'dashboard',
      //   routes: [
      //     {
      //       path: '/dashboard/analysis',
      //       name: 'analysis',
      //       component: './Dashboard/Analysis',
      //     },
      //     {
      //       path: '/dashboard/monitor',
      //       name: 'monitor',
      //       component: './Dashboard/Monitor',
      //     },
      //     {
      //       path: '/dashboard/workplace',
      //       name: 'workplace',
      //       component: './Dashboard/Workplace',
      //     },
      //   ],
      // },
      // // forms
      // {
      //   path: '/form',
      //   icon: 'form',
      //   name: 'form',
      //   routes: [
      //     {
      //       path: '/form/basic-form',
      //       name: 'basicform',
      //       component: './Forms/BasicForm',
      //     },
      //     {
      //       path: '/form/step-form',
      //       name: 'stepform',
      //       component: './Forms/StepForm',
      //       hideChildrenInMenu: true,
      //       routes: [
      //         {
      //           path: '/form/step-form',
      //           redirect: '/form/step-form/info',
      //         },
      //         {
      //           path: '/form/step-form/info',
      //           name: 'info',
      //           component: './Forms/StepForm/Step1',
      //         },
      //         {
      //           path: '/form/step-form/confirm',
      //           name: 'confirm',
      //           component: './Forms/StepForm/Step2',
      //         },
      //         {
      //           path: '/form/step-form/result',
      //           name: 'result',
      //           component: './Forms/StepForm/Step3',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/form/advanced-form',
      //       name: 'advancedform',
      //       authority: ['admin'],
      //       component: './Forms/AdvancedForm',
      //     },
      //   ],
      // },
      // // list
      // {
      //   path: '/list',
      //   icon: 'table',
      //   name: 'list',
      //   routes: [
      //     {
      //       path: '/list/table-list',
      //       name: 'searchtable',
      //       component: './List/TableList',
      //     },
      //     {
      //       path: '/list/basic-list',
      //       name: 'basiclist',
      //       component: './List/BasicList',
      //     },
      //     {
      //       path: '/list/card-list',
      //       name: 'cardlist',
      //       component: './List/CardList',
      //     },
      //     {
      //       path: '/list/search',
      //       name: 'searchlist',
      //       component: './List/List',
      //       routes: [
      //         {
      //           path: '/list/search',
      //           redirect: '/list/search/articles',
      //         },
      //         {
      //           path: '/list/search/articles',
      //           name: 'articles',
      //           component: './List/Articles',
      //         },
      //         {
      //           path: '/list/search/projects',
      //           name: 'projects',
      //           component: './List/Projects',
      //         },
      //         {
      //           path: '/list/search/applications',
      //           name: 'applications',
      //           component: './List/Applications',
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   path: '/profile',
      //   name: 'profile',
      //   icon: 'profile',
      //   routes: [
      //     // profile
      //     {
      //       path: '/profile/basic',
      //       name: 'basic',
      //       component: './Profile/BasicProfile',
      //     },
      //     {
      //       path: '/profile/basic/:id',
      //       name: 'basic',
      //       hideInMenu: true,
      //       component: './Profile/BasicProfile',
      //     },
      //     {
      //       path: '/profile/advanced',
      //       name: 'advanced',
      //       authority: ['admin'],
      //       component: './Profile/AdvancedProfile',
      //     },
      //   ],
      // },
      // {
      //   name: 'result',
      //   icon: 'check-circle-o',
      //   path: '/result',
      //   routes: [
      //     // result
      //     {
      //       path: '/result/success',
      //       name: 'success',
      //       component: './Result/Success',
      //     },
      //     { path: '/result/fail', name: 'fail', component: './Result/Error' },
      //   ],
      // },
      // {
      //   name: 'exception',
      //   icon: 'warning',
      //   path: '/exception',
      //   routes: [
      //     // exception
      //     {
      //       path: '/exception/403',
      //       name: 'not-permission',
      //       component: './Exception/403',
      //     },
      //     {
      //       path: '/exception/404',
      //       name: 'not-find',
      //       component: './Exception/404',
      //     },
      //     {
      //       path: '/exception/500',
      //       name: 'server-error',
      //       component: './Exception/500',
      //     },
      //     {
      //       path: '/exception/trigger',
      //       name: 'trigger',
      //       hideInMenu: true,
      //       component: './Exception/TriggerException',
      //     },
      //   ],
      // },
      // {
      //   name: 'account',
      //   icon: 'user',
      //   path: '/account',
      //   routes: [
      //     {
      //       path: '/account/center',
      //       name: 'center',
      //       component: './Account/Center/Center',
      //       routes: [
      //         {
      //           path: '/account/center',
      //           redirect: '/account/center/articles',
      //         },
      //         {
      //           path: '/account/center/articles',
      //           component: './Account/Center/Articles',
      //         },
      //         {
      //           path: '/account/center/applications',
      //           component: './Account/Center/Applications',
      //         },
      //         {
      //           path: '/account/center/projects',
      //           component: './Account/Center/Projects',
      //         },
      //       ],
      //     },
      //     {
      //       path: '/account/settings',
      //       name: 'settings',
      //       component: './Account/Settings/Info',
      //       routes: [
      //         {
      //           path: '/account/settings',
      //           redirect: '/account/settings/base',
      //         },
      //         {
      //           path: '/account/settings/base',
      //           component: './Account/Settings/BaseView',
      //         },
      //         {
      //           path: '/account/settings/security',
      //           component: './Account/Settings/SecurityView',
      //         },
      //         {
      //           path: '/account/settings/binding',
      //           component: './Account/Settings/BindingView',
      //         },
      //         {
      //           path: '/account/settings/notification',
      //           component: './Account/Settings/NotificationView',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        component: '404',
      },
    ],
  },
];
