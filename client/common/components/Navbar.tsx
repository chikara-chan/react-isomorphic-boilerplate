import * as React from 'react'
import {IndexLink, Link} from 'react-router'
import '../sass/Navbar';

class Navbar extends React.Component<{},{}> {
    constructor() {
        super()
    }

    render() {
        return (
            <nav className={'navbar'}>
                <IndexLink className={'link'} activeClassName={'active'} to="/">home</IndexLink>
                <Link className={'link'} activeClassName={'active'} to="/explore">explore</Link>
                <Link className={'link'} activeClassName={'active'} to="/about">about</Link>
                <Link className={'link'} activeClassName={'active'} to="/hello">hello</Link> 
            </nav>
        )
    }
}

export default Navbar
