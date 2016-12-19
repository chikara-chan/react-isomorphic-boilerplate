# React Isomorphic Boilerplate
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/chikara-chan/react-isomorphic-boilerplate/pulls) [![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/chikara-chan/react-isomorphic-boilerplate/blob/master/LICENSE)

An universal React isomorphic boilerplate for building server side render web app.

## Introduction

This repository is an universal React isomorphic boilerplate for developer to quickly build a super fast and powerfull web app that can be rendered both on the client and on the server using the most cutting-edge technology. The next step is to clone the repository and start customizing your personal project by modifying business code based on this boilerplate.

## Technology Stack

- [React](https://github.com/facebook/react)
- [React Router](https://github.com/ReactTraining/react-router)
- [Redux](https://github.com/reactjs/redux)
- [Redux+](https://github.com/xgrommx/awesome-redux)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [PostCSS](https://github.com/postcss/postcss)
- [Sass](https://github.com/sass/sass)
- [Koa](https://github.com/koajs/koa)
- [Koa+](https://github.com/koajs)
- [Webpack](https://github.com/webpack/webpack)
- [Webpack+](https://webpack.js.org/loaders/)
- [Babel](https://github.com/babel/babel)
- [Babel+](http://babeljs.io/docs/plugins/)

## Getting Started

- `npm install` to install dependencies and devDependencies.
- `npm run dev` to start up the development environment.
- `npm run build` to compile and bundle the client and server files.
- `npm start` to depoly the production server.

## What's included

```
react-isomorphic-boilerplate/
├── build/
│   ├── server.dev.js
│   ├── webpack.dev.config.js
│   └── webpack.prod.config.js
├── client/
│   ├── about/
│   ├── common/
│   ├── home/
│   ├── shared/
│   ├── todo/
│   ├── index.js
│   └── route.js
├── dist/
├── server/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── views/
│   ├── app.js
│   └─ index.js
├── .editorconfig
├── .gitignore
├── LICENSE
├── package.json
├── README.json
└── yarn.lock
```

## Why Isomorphic

###SEO

An application that can only run in the client-side cannot serve HTML to crawlers, so it will have poor SEO by default. Web crawlers function by making a request to a web server and interpreting the result. but if the server returns a blank page, it’s not of much value. There are workarounds, but not without jumping through some hoops.

###Performance

By the same token, if the server doesn’t render a full page of HTML but instead waits for client-side JavaScript to do so, users will experience a few critical seconds of blank page or loading spinner before seeing the content on the page. There are plenty of studies showing the drastic effect a slow site has on users, and thus revenue.

###Maintainability

While the ideal case can lead to a nice, clean separation of concerns, inevitably some bits of application logic or view logic end up duplicated between client and server, often in different languages. Common examples are date and currency formatting, form validations, and routing logic. This makes maintenance a nightmare, especially for more complex apps.

## Author

[Chikara Chan](https://github.com/chikara-chan)

## License

[MIT](https://github.com/chikara-chan/react-isomorphic-boilerplate/blob/master/LICENSE)
