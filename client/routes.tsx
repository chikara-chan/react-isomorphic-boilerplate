import Common from './common/containers/Root';
import Home from './home/containers/App';
import Explore from './explore/containers/App';
import About from './about/containers/App';
import Hello from './hello/containers/App';

declare const require: any;


import * as React from 'react';

import * as reactRouter from 'react-router';

import { anyObj } from './interface';

let { Router, Route, IndexRoute, Link, IndexLink, browserHistory } = reactRouter;

const RootRouter =function(history){
    return (
        <Router history={history}>
        <Route path={'/'} component={Common}>

            <IndexRoute component={Home} />


            <Route path={`explore`} component={Explore}>

            </Route>

            <Route path={`about`} component={About}>

            </Route>

            <Route path={`hello`} component={Hello}>

            </Route>

        </Route>
        </Router>
    )
};

export default RootRouter;

/*export default class RootRouter extends React.Component<anyObj, anyObj>{

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Root}>
                    <IndexRoute component={home} />

                    <Route path={`about`} component={about}>

                    </Route>

                    <Route path={`explore`} component={explore}>

                    </Route>

                    <Route path={`about`} component={about}>

                    </Route>

                    <Route path={`hello`} component={hello}>

                    </Route>

                </Route>


            </Router>
        )
    }

}*/


// // Hook for server
// if (typeof require.ensure !== 'function') {
//     require.ensure = function (dependencies, callback) {
//         callback(require)
//     }
// }

// const routes = {
//     childRoutes: [{
//         path: '/',
//         component: Root,
//         indexRoute: {
//             getComponent(nextState, callback) {

//                 require.ensure([], require => {
//                     callback(null, home)
//                 }, 'home')
//             }
//         },
//         childRoutes: [{
//             path: 'explore',
//             getComponent(nextState, callback) {
//                 require.ensure([], require => {
//                     callback(null, explore)
//                 }, 'explore')
//             }
//         }, {
//             path: 'about',
//             getComponent(nextState, callback) {
//                 require.ensure([], require => {
//                     callback(null, about)
//                 }, 'about')
//             }
//         },
//         {
//             path: 'hello',
//             getComponent(nextState, callback) {
//                 require.ensure([], require => {
//                     callback(null, hello)
//                 }, 'hello')
//             }
//         }
//         ]
//     }]
// }

// export default routes
