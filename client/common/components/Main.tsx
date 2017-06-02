import * as React from 'react'
import '../sass/Main.scss';

class Main extends React.Component<{},{}> {
    constructor() {
        super()
    }

    render() {
        const {children} = this.props

        return (
            <main className={'main'}>
                {children}
            </main>
        )
    }
}

export default Main
