import React from 'react';
import { FaEdit, FaEraser } from 'react-icons/fa';
import './TodoItem.scss';

const TodoItem = () => {
    return (
        <div className="TodoItemWrapper">
            무엇 무엇을 하자
            <div className="Icons">
                <div className="Icon">
                    <FaEdit />
                </div>
                <div className="Icon">
                    <FaEraser />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;