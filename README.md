# React Isomorphic Boilerplate

An universal React isomorphic boilerplate for building server side render web app.

## Introduction

This repository is an universal React isomorphic boilerplate for developer to quickly build a super fast and powerfull web app that can be rendered both on the client and on the server using the most cutting-edge technology.

The next step is to clone the repository and start customizing your personal project by modifying business code based on this boilerplate.

## Technology Stack

- React
- React Router
- Redux
- Redux+
- CSS Modules
- PostCSS
- Sass
- Koa
- Koa+
- Webpack
- Webpack+
- Babel
- Babel+

## Getting Started

- `npm install` to install dependencies and devDependencies.
- `npm run dev` to start up the development environment.
- `npm run build` to compile and bundle the client and server files.
- `npm start` to depoly the production server.

## Why Isomorphic

###SEO

An application that can only run in the client-side cannot serve HTML to crawlers, so it will have poor SEO by default. Web crawlers function by making a request to a web server and interpreting the result. but if the server returns a blank page, it’s not of much value. There are workarounds, but not without jumping through some hoops.

###Performance

By the same token, if the server doesn’t render a full page of HTML but instead waits for client-side JavaScript to do so, users will experience a few critical seconds of blank page or loading spinner before seeing the content on the page. There are plenty of studies showing the drastic effect a slow site has on users, and thus revenue.

###Maintainability

While the ideal case can lead to a nice, clean separation of concerns, inevitably some bits of application logic or view logic end up duplicated between client and server, often in different languages. Common examples are date and currency formatting, form validations, and routing logic. This makes maintenance a nightmare, especially for more complex apps.

## License

MIT
