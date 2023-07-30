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
