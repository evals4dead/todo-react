import React from 'react';
import './TodoInput.scss';

const TodoInput = () => {
    return (
        <div className="TodoInputWrapper">
            <input type="text" name="todo" placeholder="작성할 투두를 입력하세요." />
            <div className="AddButton">
                추가하기
            </div>
        </div>
    );
};

export default TodoInput;