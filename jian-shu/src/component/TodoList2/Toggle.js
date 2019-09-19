import React, {Component} from 'react';
import './toggle.css';

class Toggle extends Component {
    state = {
        isTrue: true,
    };
    
    render() {
        const {isTrue} = this.state;
        return (
            <div className="Toggle">
                <button onClick={this.clickToggle.bind(this)}>toggle</button>
                <span className={isTrue ? 'hello' : this.randomClass()}>
                    {isTrue ? 'hello' : 'world'}
                </span>
            </div>
        );
    }
    
    randomClass() {
        const random = Math.random();
        return random > 0.5 ? 'world' : 'animation';
    }
    
    clickToggle() {
        this.setState((state) => {
            return {
                isTrue: !state.isTrue,
            };
        });
    }
}

export default Toggle;
