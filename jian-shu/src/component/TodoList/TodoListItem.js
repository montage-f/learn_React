import React from 'react';

const TodoListItem = ({item,deleteItem}) => {
    return (
        <li className="TodoListItem">
            <span style={{marginRight: 10}}>{item}</span>
            {/*dangerouslySetInnerHTML 用于不转译标签*/}
            <span style={{marginRight: 10}} dangerouslySetInnerHTML={{__html: item}} />
            <span onClick={deleteItem}>x</span>
        </li>
    );
};

export default TodoListItem;
