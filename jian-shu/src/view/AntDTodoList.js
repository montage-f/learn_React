import React, {Component} from 'react';
import {connect} from 'react-redux';

// 容器组件
class AntDTodoList extends Component {
    render() {
        return (
            <div className="AntDTodoList">
                <div>
                    <input type="text"
                           value={this.props.inputValue}
                           onChange={this.props.handleChangeInput}
                    />
                    <button onClick={this.handleClick.bind(this)}>提交</button>
                </div>
                <div>
                    <ul>
                        <li>react-redux</li>
                    </ul>
                </div>
            </div>
        );
    }
    
    
    handleClick() {
    
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeInput(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AntDTodoList);
