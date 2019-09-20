import React, {Component} from 'react';
import '../style/AntDTodoList/AntDTodoList.css';
import AntDTodoListUi from '../component/AntDTodoListUI';
// 引入store
import store from '../store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreators';

// 容器组件
class AntDTodoList extends Component {
    constructor(props) {
        super(props);
        // 将store里面的数据, 赋值到当前组件内的state上面
        this.state = store.getState();
        // 监听store里面的数据, 只要是数据发生了变化, 就会执行后面这个函数
        store.subscribe(this.handleStoreChange.bind(this));
    }
    
    render() {
        return (
            <AntDTodoListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange.bind(this)}
                handleBtnClick={this.handleBtnClick.bind(this)}
                handleItemClick={this.handleItemClick}
            />
        );
    }
    
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    
    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    
    handleItemClick(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
    
    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default AntDTodoList;
