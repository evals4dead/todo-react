import React from 'react';
import './TodoInput.scss';

const TodoInput = ({onChange, todoInput, insertTodo}) => {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            insertTodo();
        }
    }

    return (
        <div className="TodoInputWrapper">
            <input 
                type="text" 
                name="todo" 
                placeholder="작성할 투두를 입력하세요." 
                onChange={onChange} 
                value={todoInput}
                onKeyPress={handleKeyPress} />
            <div className="AddButton" onClick={insertTodo}>
                추가하기
            </div>
        </div>
    );
};

export default TodoInput;