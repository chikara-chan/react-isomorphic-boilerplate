import { Component, PropTypes } from 'react';

class LaserBeam extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            style: {
                position: 'fixed',
                top: '0',
                left: '0',
                zIndex: '1031',
                width: '0',
                height: '50px',
                background: 'rgba(0,0,0,0.1)',
                transition: 'width 0ms'
            }
        };
    }

    //temp
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    //temp
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    //temp
    handleScroll() {
        const { style } = this.state;
        const { scrollTop } = document.body;
        let changedStyle;

        if (scrollTop >= 50) {
            changedStyle = Object.assign({}, style, {
                height: '2px',
                background: '#77b6ff',
                boxShadow: '0 0 10px rgba(119,182,255,0.7)'
            });
        } else {
            changedStyle = Object.assign({}, style, {
                height: (50 - scrollTop) + 'px',
                background: 'rgba(0,0,0,0.1)',
                boxShadow: 'none'
            });
        }
        this.setState({
            style: changedStyle
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show != nextProps.show ||
            this.state.style != nextState.style;
    }


    componentWillReceiveProps(nextProps) {
        const { style } = this.state;
        const { show } = this.props;
        const nextShow = nextProps.show;
        let changedStyle;

        if (show == nextShow) {
            return;
        }
        if (!show && nextShow) {
            changedStyle = Object.assign({}, style, {
                width: '0',
                transition: 'width 0ms'
            });
            this.setState({
                style: changedStyle
            });
            changedStyle = Object.assign({}, style, {
                width: '70%',
                transition: 'width 10s cubic-bezier(0, 1, 0.3, 1)'
            });
            setTimeout(() => {
                this.setState({
                    style: changedStyle
                });
            }, 1);
            return;
        }
        if (nextShow) {
            changedStyle = Object.assign({}, style, {
                width: '70%',
                transition: 'width 10s cubic-bezier(0, 1, 0.3, 1)'
            });
        } else {
            changedStyle = Object.assign({}, style, {
                width: '100%',
                transition: 'width 400ms ease'
            });
        }
        this.setState({
            style: changedStyle
        });
    }

    handleTransitionEnd() {
        const { style } = this.state;
        const { show } = this.props;
        let changedStyle;

        if (!show) {
            changedStyle = Object.assign({}, style, {
                width: '0',
                transition: 'width 0ms'
            });

            this.setState({
                style: changedStyle
            });
        }
    }

    render() {
        const { style } = this.state;

        return (
            <div style={style} onTransitionEnd={this.handleTransitionEnd.bind(this)}></div>
        );
    }
}

LaserBeam.propTypes = {
    show: PropTypes.bool.isRequired
};

export default LaserBeam;