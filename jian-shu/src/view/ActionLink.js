import React, {Component} from 'react';

class ActionLink extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    render() {
        return (
            <div className="ActionLink">
                <a href="#" onClick={this.handleClick}>Click me!</a>
            </div>
        );
    }
    
    handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    
}

export default ActionLink;
