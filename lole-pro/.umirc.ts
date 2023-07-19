import { defineConfig } from 'umi';

export default defineConfig({
  antd: false,
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    slave: {}
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  extraPostCSSPlugins: [
    require('tailwindcss')({config:'./tailwind.config.js'}),
    require('autoprefixer')]
});
