import React, {Component, Fragment} from 'react';
import '../style/TodoList.css';

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
    }
    
    render() {
        return (
            // Fragment 占位符, 让外层标签隐藏
            <Fragment>
                <div className="write">
                    <label htmlFor="insertArea">输入内容</label>
                    <input type="text"
                           id='insertArea'
                           value={this.state.inputValue}
                           onChange={this.changeInputValue.bind(this, 2)}
                    />
                    <button onClick={this.submit.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((v, index) =>
                            <li key={index}>
                                <span style={{marginRight: 10}}>{v}</span>
                                {/*dangerouslySetInnerHTML 用于不转译标签*/}
                                <span dangerouslySetInnerHTML={{__html: v}} />
                                <span onClick={this.deleteItem.bind(this, index)}>x</span>
                            </li>,
                        )
                    }
                </ul>
            </Fragment>
        );
    }
    
    // react会将默认的event事件放到最后一个参数
    changeInputValue(number, e) {
        this.setState({
            inputValue: e.target.value,
        });
    }
    
    submit() {
        this.setState({
            list: [
                ...this.state.list,
                this.state.inputValue,
            ],
            inputValue: '',
        });
    }
    
    deleteItem(index) {
        const list = JSON.parse(JSON.stringify(this.state.list));
        list.splice(index, 1);
        this.setState({
            list,
        });
    }
}

export default TodoList;
