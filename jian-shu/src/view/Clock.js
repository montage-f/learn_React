import React, {Component} from 'react';

class Clock extends Component {
    
    state = {
        time: new Date().toLocaleTimeString()
    };
    
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    
    static getDerivedStateFromProps() {
        console.log('static getDerivedStateFromProps()');
    }
    
    componentDidMount() {
        // setInterval(() => {
        //     this.getTime();
        // }, 1000);
        console.log('componentDidMount');
    }
    
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps, nextState, nextContext);
        console.log('shouldComponentUpdate');
        // 返回false, 那么就不会更新该组件
        return true;
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    getTime() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    
    render() {
        console.log('render');
        const {time} = this.state;
        return (
            <div className="Clock">
                {time}
            </div>
        );
    }
    
    
}

export default Clock;
