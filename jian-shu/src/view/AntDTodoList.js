import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import '../style/AntDTodoList/AntDTodoList.css';

// 引入store
import store from '../store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from '../store/actionCreators';

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
            <div className="AntDTodoList">
                <div className="writeInfo">
                    <Input
                        placeholder="todo info"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <Button type="primary"
                            onClick={this.handleBtnClick.bind(this)}
                    >
                        提交
                    </Button>
                </div>
                <div className="listMessage">
                    <List
                        dataSource={this.state.list}
                        renderItem={({title}, index) => (
                            <List.Item
                                onClick={this.handleItemClick.bind(this, index)}
                            >
                                {title}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
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
