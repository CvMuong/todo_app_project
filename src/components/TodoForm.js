import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Thêm công việc mới..."
          className="todo-input"
          maxLength={100}
        />
        <button type="submit" className="add-button" disabled={!input.trim()}>
          <span className="add-icon">+</span>
          Thêm
        </button>
      </div>
      <div className="input-counter">
        {input.length}/100
      </div>
    </form>
  );
}

export default TodoForm;