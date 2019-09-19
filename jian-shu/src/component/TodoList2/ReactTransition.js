import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import './reactTransition.css';

class ReactTransition extends Component {
    state = {
        showButton: true,
        showMessage: false,
    };
    
    render() {
        const {showMessage} = this.state;
        return (
            <div className="ReactTransition">
                {this.showButton()}
                <CSSTransition
                    in={showMessage}
                    timeout={500}
                    classNames="show"
                    unmountOnExit
                    onEnter={this.setShowButton.bind(this, false)}
                    onExited={this.setShowButton.bind(this, true)}
                >
                    <div onClick={this.setShowMessage.bind(this, false)} className="text">
                        你好
                    </div>
                </CSSTransition>
            </div>
        );
    }
    
    showButton() {
        const {showButton} = this.state;
        return showButton ? <button onClick={this.setShowMessage.bind(this, true)}>show Message</button> : '';
    }
    
    setShowMessage(isShow,el) {
        console.log(el.target);
        this.setState(() => ({
            showMessage: isShow,
        }));
    }
    
    setShowButton(isShow) {
        this.setState(() => ({
            showButton: isShow,
        }));
    }
}

export default ReactTransition;
