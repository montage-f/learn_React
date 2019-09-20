import React from 'react';
import {Button, Input, List} from 'antd';

// 无状态组件也可以称之为函数组件
const AntDTodoListUI = ({inputValue, list, handleBtnClick, handleInputChange, handleItemClick}) =>
    <div className="AntDTodoList">
        <div className="writeInfo">
            <Input
                placeholder="todo info"
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button type="primary"
                    onClick={handleBtnClick}
            >
                提交
            </Button>
        </div>
        <div className="listMessage">
            <List
                dataSource={list}
                renderItem={({title}, index) => (
                    <List.Item
                        onClick={handleItemClick.bind(this, index)}
                    >
                        {title}
                    </List.Item>
                )}
            />
        </div>
    </div>;

export default AntDTodoListUI;
