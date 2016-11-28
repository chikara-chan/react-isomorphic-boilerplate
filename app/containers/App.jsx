import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import 'normalize.css'
import '../common/layout.less'

class App extends Component {
  render () {
    return (<div>
      <Header />
      <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/picture'>Picture</Link></li>
        <li><Link to='/counter'>Counter</Link></li>
      </nav>
      {this.props.children}
    </div>)
  }
}

export default connect(state => ({

}))(App)