import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({item, deleteItem}) => {
    console.log(PropTypes);
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
