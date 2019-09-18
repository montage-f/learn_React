import React, {Component} from 'react';

class TodoListItem extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextProps.item, 'nextProps');
        console.log(this.props.item, 'nextProps');
        console.log(this.props.item === nextProps.item, 'isTrue');
        return this.props.item !== nextProps.item;
        
    }
    
    render() {
        const {item, deleteItem} = this.props;
        return (
            <li className="TodoListItem">
                <span style={{marginRight: 10}}>{item}</span>
                {/*dangerouslySetInnerHTML 用于不转译标签*/}
                <span style={{marginRight: 10}} dangerouslySetInnerHTML={{__html: item}} />
                <span onClick={deleteItem}>x</span>
            </li>
        );
    }
}

export default TodoListItem;
