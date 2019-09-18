import React, {Component} from 'react';

class Toggle extends Component {
    state = {
        value: true
    };
    
    render() {
        return (
            <div className="Toggle">
                <button onClick={this.handleToggle.bind(this, 12)}>
                    Toggle
                </button>
                <span>
                    {this.state.value ? 'Yes' : 'No'}
                </span>
            </div>
        );
    }
    
    handleToggle = (number) => {
        console.log(this, number);
        this.setState((state) => ({value: !state.value}));
    };
}

export default Toggle;
