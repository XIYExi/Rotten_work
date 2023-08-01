import { defineConfig } from 'umi';

export default defineConfig({
  antd: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/bery',
      component: '@/pages/index',
      routes: [
        /*agency*/
        {
          path: '/bery/agency/',
          component: '@/pages/house/index02',
          routes: [
            {
              path: '/bery/agency/agent-details',
              component: '@/pages/house/AgentDetails/index'
            },
            {
              path: '/bery/agency/agent',
              component: '@/pages/house/Agent/index'
            },
            {
              path: '/bery/agency/agency-details',
              component: '@/pages/house/AgencyDetails/index'
            },
            {
              path:'/bery/agency/create-agency',
              component: '@/pages/house/CreateAgency/index'
            },
            {
              path: '/bery/agency/',
              component: '@/pages/house/Agency/index'
            }
          ]
        },
        /*pages*/
        {
          path: '/bery/pages',
          component: '@/pages/house/index02',
          routes: [
            {
              path: '/bery/pages/register',
              component: '@/pages/house/Register/index'
            },
            {
              path: '/bery/pages/login',
              component: '@/pages/house/Login/index'
            },
            {
              path: '/bery/pages/single-service',
              component: '@/pages/house/SingleService/index'
            },
            {
              path:'/bery/pages/service',
              component: '@/pages/house/Service/index'
            }
          ]
        },
        /*Home03*/
        {
          path:'/bery/house02',
          component: '@/pages/house/index02',
          routes: [
            {
              path: '/bery/house02/index-6',
              component: '@/pages/house/Home06/index'
            },
            {
              path:'/bery/house02/index-5',
              component: '@/pages/house/Home05/index'
            },
            {
              path: '/bery/house02/index-4',
              component: '@/pages/house/Home04/index'
            },
            {
              path: '/bery/house02/index-3',
              component: '@/pages/house/Home03/index'
            }
          ]
        },
        /*Home01 ~ Home02*/
        {
          path: '/bery/house',
          component: '@/pages/house/index',
          routes: [
            {
              path:'/bery/house/index-2',
              component: '@/pages/house/Home02/index'
            },
            {
              path: '/bery/house',
              component: '@/pages/house/Home01/index'
            }
          ]
        },
        /*about*/
        {
          path: '/bery/about/index-2',
          component: '@/pages/house/index02',
          routes: [
            {
              path: '/bery/about/index-2',
              component: '@/pages/house/About02/index'
            }
          ]
        },
        {
          path: '/bery/about',
          component: '@/pages/house/index',
          routes: [
            {
              path: '/bery/about/',
              component: '@/pages/house/About01/index'
            }
          ]
        }
      ]
    },
    {
      path: '/',
      component: '@/layout/index',
    },
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [
    require('tailwindcss')({config:'./tailwind.config.js'}),
    require('autoprefixer')]
});
