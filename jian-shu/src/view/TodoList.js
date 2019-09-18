import React, {Component, Fragment} from 'react';
import '../style/TodoList.css';

import TodoListItem from '../component/TodoList/TodoListItem';
import Clock from './Clock';
import ActionLink from './ActionLink';
import Toggle from './Toggle';

class TodoList extends Component {
    state = {
        inputValue: '',
        list: [
            '学习React',
        ],
    };
    
    // 如果是构造函数, rest里面有一个props参数,
    constructor(...rest) {
        super(...rest);
        
        this.changeInputValue = this.changeInputValue.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    getTodoItem() {
        return this.state.list.map((v, index) =>
            <TodoListItem
                key={index}
                item={v}
                deleteItem={this.deleteItem.bind(this, index)}
            />,
        );
    }
    
    // 当组件的state里面的值, 或者子组件里面的props发生了变化, 那么render函数就会执行
    render() {
        return (
            // Fragment 占位符, 让外层标签隐藏
            <Fragment>
                <div className="write">
                    <label htmlFor="insertArea">输入内容</label>
                    <input type="text"
                           id='insertArea'
                           value={this.state.inputValue}
                           onChange={this.changeInputValue}
                    />
                    <button onClick={this.submit}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                    {/*<Clock />*/}
                    {/*<ActionLink />*/}
                    {/*<Toggle />*/}
                </ul>
            </Fragment>
        );
    }
    
    // react会将默认的event事件放到最后一个参数
    changeInputValue(e) {
        // old
        // this.setState({
        //     inputValue: e.target.value,
        // });
        // new  传入函数, 将会变成异步函数
        const value = e.target.value;
        this.setState(() => ({inputValue: value}));
    }
    
    submit() {
        // this.setState({
        //     list: [
        //         ...this.state.list,
        //         this.state.inputValue,
        //     ],
        //     inputValue: '',
        // });
        // 第一个参数是state里面的之前的状态
        this.setState((prevState) => {
            return {
                list: [...prevState.list, prevState.inputValue],
                inputValue: '',
            };
        });
    }
    
    deleteItem(index) {
        this.setState(({list}) => {
            const copyList = [...list];
            copyList.splice(index, 1);
            return {list: copyList};
        });
    }
}

export default TodoList;
