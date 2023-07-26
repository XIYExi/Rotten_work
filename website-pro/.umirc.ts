import { defineConfig } from 'umi';

export default defineConfig({
  antd: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/house',
      component: '@/pages/index',
      routes: [
        /*Home03*/
        {
          path:'/house/index-3',
          component: '@/pages/house/index02',
          routes: [
            {
              path: '/house/index-3',
              component: '@/pages/house/Home03/index'
            }
          ]
        },
        /*Home01 ~ Home02*/
        {
          path: '/house',
          component: '@/pages/house/index',
          routes: [
            {
              path:'/house/index-2',
              component: '@/pages/house/Home02/index'
            },
            {
              path: '/house',
              component: '@/pages/house/Home01/index'
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
