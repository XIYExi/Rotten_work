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
        {
          path: '/house',
          component: '@/pages/house/index',
          routes: [{
            path: '/',
            component: '@/pages/house/Home01'
          }]
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
