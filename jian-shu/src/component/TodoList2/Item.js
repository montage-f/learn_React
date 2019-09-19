import React, {Component} from 'react';
import './item.css';

class Item extends Component {
    render() {
        const {item, deleteItem} = this.props;
        return (
            <li className="item">
                <span>{item}</span>
                <span onClick={deleteItem}>x</span>
            </li>
        );
    }
}

export default Item;
