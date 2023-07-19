import { defineConfig } from 'umi';

export default defineConfig({
  qiankun:{
    master: {
      apps: [
        {
          name:'personal-pro',
          entry:'//localhost:8012'
        },
        {
          name: 'personal_responsive',
          entry: '//localhost:8013'
        }
      ],
    },
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/personal_responsive',
      microApp: 'personal_responsive'
    },
    {
      path:'/personal-pro',
      microApp: 'personal-pro'
    },
    {
      path: '/',
      component: '@/layout/index',
      routes:[
        {
          path:'/work',
          component: '@/pages/work/index'
        },
        {
          path:'/',
          component:'@/pages/home/index'
        }
      ]
    }
  ],
  fastRefresh: {},
});
