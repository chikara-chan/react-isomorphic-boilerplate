# **koa2-react-isomorphic-boilerplate**

keywords: koa2,react,redux,isomorphic app



## Getting Start in dev mode

```
git clone https://github.com/wssgcg1213/koa2-react-isomorphic-boilerplate
cd koa2-react-isomorphic-boilerplate
npm install # 国内可以使用 cnpm 加速, 教育网可使用 rednpm (https://npm.mirror.cqupt.edu.cn)加速
npm start  # dev mode
```

open in browser

http://127.0.0.1:3000/ 

## Deploy

```bash
npm test # pass unit tests
npm run build # build to dist
npm run production # or pm2 start
```

## 目录结构

```bash
.
├── app
│   ├── actions
│   ├── common
│   ├── components
│   ├── containers
│   │   └── App.jsx             # React App
│   ├── reducers
│   ├── routes.js               # 路由配置文件
│   └── store
│       └── configureStore.js
├── bin
│   ├── development.js
│   └── production.js
├── package.json
├── platforms
│   ├── browser                 # 浏览器相关
│   │   └── index.js            # 浏览器 APP 入口
│   ├── common
│   │   └── config              # 配置
│   │       ├── default.js
│   │       └── index.js
│   └── server                  # 服务端相关
│       ├── controllers
│       │   ├── indexCtrl.js
│       │   ├── serverRenderCtrl.js
│       │   └── usersCtrl.js
│       ├── index.js            # 服务端入口
│       ├── middlewareRegister.js
│       ├── models
│       ├── routes              # 服务端路由
│       │   ├── api.js
│       │   ├── index.js
│       │   └── render.js
│       ├── services
│       └── templates           # 服务端模板
│           ├── 404.ejs
│           ├── 422.ejs
│           ├── 500.ejs
│           └── index.ejs
├── pm2.json
├── public                      # public
│   ├── favicon.ico
│   └── robots.txt
├── test
│   └── test.js
├── webpack.build.js
└── webpack.development.js
```



## 同构的优势

1. 首屏性能
2. SEO / 搜索引擎爬虫支持
3. 无缝的用户体验

## 实现的细节

### 目录结构

从 commits 可以看出, 目录的结构中途修改了多次, 对于目前的结构我也觉得有不合理的地方, 欢迎来提 issue 讨论. 由于在同构应用中, 有三种代码: 客户端 only ,服务端 only , 共用代码 , 这使得良好的目录结构显得更加重要. 最后我是参考了 [ultimate-hot-reloading-example](https://github.com/glenjamin/ultimate-hot-reloading-example) 这个项目的目录结构, 又做了适当的修改.

### ServerSideRender

有人提出 React 是一种架构模式, 无论是内建的 DOM、Native还是React Canvas都是的一种基于React模式的具体实现. 那么 HTML string 其实也是 react 模式的一种实现, 只不过产出的是一堆字符串. React 在前几个版本中就把 render 函数从 react 中单独独立出来(react-dom), 服务端渲染依赖的就是 react-dom/server 中的renderToString 方法.

```javascript
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'

const appHtml = renderToString(<App {...renderProps} />)
```

### 路由

由于服务端需要做这么几件事情:

1. react render
2. api server

这些都需要路由来做分发

在服务端对于 /api 的请求, 全部交给 koa-router 来处理, 对于其他请求则交给 react-router 来处理

```javascript
  // api server through koa-router
  if (ctx.path.match(/^\/api/)) {
    return await require('./api').routes()(ctx, next)
  }
  // others react-router to render
  await require('./render')(ctx, next)
```

koa-router 的用法在 platforms/server/routes/api.js 中, react-router 的用法的核心是 match 函数

```javascript
const { redirectLocation, renderProps } = await _match({ routes: require('../../../app/routes'), location: ctx.url })
if (redirectLocation) {
  ctx.redirect(redirectLocation.pathname + redirectLocation.search)
} else if (renderProps) {
  await renderCtrl(ctx, next, renderProps)
} else {
  await next()
}
```

上面的 renderCtrl 是负责服务端渲染的方法. require 的 routes 文件就是 react-router 的配置文件, 该文件在前后端路由中是共用的.

```javascript
// routes.js
export default (
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path="picture" component={Picture} />
    <Route path="counter" component={Counter} />
  </Route>
</Router>
)
```



### 数据层

React 有丰富的数据层框架, 我用的是现在比较流行的 redux.

在服务端前置拉取数据的逻辑参考了 [ReactJS 服务端同构实践【QQ音乐web团队】](http://mp.weixin.qq.com/s?__biz=MTEwNTM0ODI0MQ==&mid=2653433133&idx=1&sn=3b3aaaea7ddcfcfd47b5433570b3536b&scene=0#wechat_redirect)这篇文章的实现方式.

即在 react component 中规定了一个 fetch 的静态方法,在 Server Rendering 时，和前端相比组件没有完整的生命周期，只会走到 componentWillMount, 所以在前端的 componentDidMount 方法中去判断是否在前端做 fetch; 在做服务端渲染的时候遍历需要渲染的 components 去同步调用静态方法得到数据并吐出在页面上作为redux 的 initialState.

```javascript
  let prefetchTasks = []
  for (let component of renderProps.components) {
    if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
      const _tasks = component.WrappedComponent.fetch(store.getState(), store.dispatch)
      if (Array.isArray(_tasks)) {
        prefetchTasks = prefetchTasks.concat(_tasks)
      } else if (_tasks.then) {
        prefetchTasks.push(_tasks)
      }
    }
  }

  await Promise.all(prefetchTasks)
  await ctx.render('index', {
    title: config.title,
    dev: ctx.app.env === 'development',
    reduxData: store.getState(),
    app: renderToString(<Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  })  
```

Component: 

```javascript
class App extends Component {
  static fetch (state, dispatch) {
    const fetchTasks = []
    fetchTasks.push(
      dispatch(fetchStateIfNeeded(state))
    )
    return fetchTasks
  }

  componentDidMount () {
    const { loaded, success } = this.props
    if ( !loaded || (loaded && !success) ) {
      this.constructor.fetch(this.props, this.props.dispatch)
    }
  }
  
  render () {
    const { location: { pathname } } = this.props
    const headerCurrent = pathname === '/' ? 'home' : pathname.slice(1)
    
    return (<div>
      <Header current={headerCurrent}/>
      <Main>{this.props.children}</Main>
      <Footer />
    </div>)
  }
}
```



### 模板

模板引擎是用的简单的 ejs

在 server render 的时候把 initial State 获取并吐出在页面中

```html
    <section role="main" class="react-container">
      <div><%- app %></div>
    </section>
    <script>
      try {
        window.__REDUX_STATE__ = JSON.parse('<%- JSON.stringify(reduxData) %>');
      } catch (e) {
        console.warn('error in getting server redux data');
      }
    </script>
    <script src="/build/common.js"></script>
    <script src="/build/main.js"></script>
```

在前端的入口文件中使用 `window.__REDUX_STATE__` 作为初始 state

```javascript
const store = configureStore(window.__REDUX_STATE__)
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('.react-container')
)
```



### 前后端兼容

#### 前后端逻辑区分

虽然是同构应用, 大部分逻辑是共用的, 但是在服务端和浏览器端具体的实现肯定是不同的, 比如 superagent / isomorphic-fetch 这些库在服务端是使用的 http.request 方法, 而在前端使用 XHR 来实现. 那么在编写代码中, 前端的 url 可以使用相对路径, 而服务端只能使用完整的 http 请求路径.

```javascript
const fetchStateUrl = __SERVER__ ? `http://localhost:${require('../../platforms/common/config').port}/api/state` : '/api/state'
```

可以通过 webpack 的 definePlugin 来做, 但是由于我在 development 模式下是通过 node + babel-register + webpack-dev-middleware 直接运行的应用, 对于服务端运行的代码 webpack 就无能为力了. 我写了一个 babel 的插件 https://github.com/wssgcg1213/babel-plugin-inline-replace-variables 来直接对 js 的 identifier 进行替换. 

在打包前端 bundle 的时候得益于 uglifyjs 插件的处理, 不可达代码会被清除, 这样也不需要担心 bundle.js 体积增大.

#### Nodejs require 静态资源文件的处理

react 的 component 中充满了` import './component.less', import img from './img.png'`这样的语法, 但在 node 中是会报错的, 因为 isomorphic-tools 的文档太冗杂, 我没有采取它那一套方案, 而是使用了`babel-plugin-transform-require-ignore`来忽略 css/less, 转而在 webpack-dev-middleware 中使用 style-loader 打包成 js bundle 输出, 这样也能同时支持 hot module replacement; 对于图片使用`asset-require-hook`这个包来使 require 直接返回文件路径.

总之, 开发模式下的服务端对 require 进行了魔改使它支持了引入 ES6+React+Stylesheets+Images 的能力.

### 总结

搞两个流程图来看看

#### 开发模式: 

![开发模式](https://dn-redrock.qbox.me/dev.png)

#### 线上模式: 

![开发模式](https://dn-redrock.qbox.me/build.png)

## Example

使用这个模式开发了

https://github.com/CQUPTMirror/mirror-web-isomorphic/

线上地址 https://mirror.cqupt.edu.cn

## Contact

[issues](https://github.com/17koa/koa2-startkit/issues)

[@Ling](https://github.com/wssgcg1213)    