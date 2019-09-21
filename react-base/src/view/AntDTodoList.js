import React from 'react';
import {connect} from 'react-redux';
import {getChangeInputValue, getAddItem, getDeleteItem} from '../store/actionCreator';

// 容器组件
const AntDTodoList = (props) => {
    const {
        inputValue, list, handleChangeInput,
        handleClick, handleDeleteItem,
    } = props;
    return (
        <div className="AntDTodoList">
            <div>
                <input type="text"
                       value={inputValue}
                       onChange={handleChangeInput}
                />
                <button onClick={handleClick}>提交</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((v, index) =>
                            <li
                                key={index}
                                onClick={() => handleDeleteItem(index)}>
                                {v}
                            </li>,
                        )
                    }
                </ul>
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeInput(e) {
            const action = getChangeInputValue(e.target.value);
            dispatch(action);
        },
        handleClick() {
            const action = getAddItem();
            dispatch(action);
        },
        handleDeleteItem(index) {
            const action = getDeleteItem(index);
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AntDTodoList);
