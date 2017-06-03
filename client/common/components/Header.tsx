import * as React from 'react'
import '../sass/Header.scss';
const imgAvatar=require('../assets/avatar.png');

class Header extends React.Component<{},{}> {
    constructor() {
        super()
    }

    render() {
        return (
            <header className={'header'}>
                <div className={'left'}>
                    <span className={'span'}>Boilerplate</span>
                </div>
                <div className={'right'}>
                    <span className={'description'}>Hello, world！</span>
                    <img className={'img'} src={imgAvatar}/>
                </div>
            </header>
        )
    }
}

export default Header
