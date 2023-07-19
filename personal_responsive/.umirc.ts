import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: false,
  qiankun: {
    slave:{}
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes:[
        {
          path:'/',
          component:'@/pages/homepage/index'
        }
      ]
    },
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [
    require('tailwindcss')({config:'./tailwind.config.js'}),
    require('autoprefixer')]
});
