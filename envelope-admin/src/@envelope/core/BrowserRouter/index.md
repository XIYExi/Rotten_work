```<Router>``` is the low-level interface that is shared by all router components
(like ```<BrowserRouter>``` and ```<StaticRouter>```). In terms of React, 
```<Router>``` is a context provider that supplies routing information to the rest of the app.


You probably never need to render a ```<Router>``` manually. Instead, you should use one of the higher-level routers depending on your environment. You only ever need one router in a given app.

The ```<Router basename>``` prop may be used to make all routes and links in your app relative to a "base" portion of the URL pathname that they all share. This is useful when rendering only a portion of a larger app with React Router or when your app has multiple entry points. Basenames are not case-sensitive.


使用history库配合Router组件，重写了一个BrowserRouter，目的是为了传递action！为了将路由和状态管理库进行绑定！
