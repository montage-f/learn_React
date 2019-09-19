import React, {Component} from 'react';
import axios from 'axios';
import Item from '../component/TodoList2/Item';
import Toggle from '../component/TodoList2/Toggle';

class TodoList2 extends Component {
    state = {
        writeValue: '',
        list: [],
    };
    
    render() {
        const {writeValue} = this.state;
        return (
            <div className="TodoList2">
                <div className="write">
                    <label htmlFor="text">输入内容:</label>
                    <input type="text" id="text"
                           value={writeValue}
                           onChange={this.writeValue.bind(this)}
                    />
                    <button onClick={this.submit.bind(this)}>提交</button>
                    <Toggle />
                </div>
                <div className="list">
                    <ul>
                        {this.getTodoListItem()}
                    </ul>
                </div>
            </div>
        );
    }
    
    async componentDidMount() {
        let {data:{data}} = await axios.post('https://www.easy-mock.com/mock/5cf8ecbb59a6db51341745b7/app/todoList');
        this.setState(() =>({list:data}))
    }
    
    getTodoListItem() {
        const {list} = this.state;
        return list.map((v, index) => {
            return (
                <Item key={index}
                      item={v}
                      deleteItem={this.deleteItem.bind(this, index)}
                />
            );
        });
    }
    
    writeValue(e) {
        e.persist();
        this.setState(() => ({
            writeValue: e.target.value,
        }));
    }
    
    submit() {
        this.setState((state, props) => ({
            list: [...state.list, state.writeValue],
            writeValue: '',
        }));
    }
    
    deleteItem(index) {
        const list = JSON.parse(JSON.stringify(this.state.list));
        list.splice(index, 1);
        this.setState(() => ({
            list,
        }));
    }
}

export default TodoList2;
