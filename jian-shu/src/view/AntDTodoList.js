import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import '../style/AntDTodoList/AntDTodoList.css';

// 引入store
import store from '../store';

class AntDTodoList extends Component {
    constructor(props) {
        super(props);
        // 将store里面的数据, 赋值到当前组件内的state上面
        this.state = store.getState();
    }
    
    render() {
        return (
            <div className="AntDTodoList">
                <div className="writeInfo">
                    <Input
                        placeholder="todo info"
                        value={this.state.inputValue}
                    />
                    <Button type="primary">提交</Button>
                </div>
                <div className="listMessage">
                    <List
                        dataSource={this.state.list}
                        renderItem={({title}) => (
                            <List.Item>
                                {title}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default AntDTodoList;
