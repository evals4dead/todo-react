import React from 'react';
import './TodoList.scss';
import TodoTitle from './TodoTitle';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'

const TodoList = () => {
    return (
        <div className="TodoListWrapper">
            <TodoTitle />
            <TodoInput />
            <div className="TodoItemListWrapper">
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};

export default TodoList;