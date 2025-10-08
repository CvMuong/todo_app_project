import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() && editText.trim() !== todo.text) {
      onEdit(editText.trim());
    }
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        className="toggle-button"
        onClick={onToggle}
        aria-label={todo.completed ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu hoàn thành'}
      >
        <span className="checkmark">
          {todo.completed ? '✓' : ''}
        </span>
      </button>

      <div className="todo-content">
        {isEditing ? (
          <div className="edit-container">
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress}
              className="edit-input"
              autoFocus
              maxLength={100}
            />
            <div className="edit-actions">
              <button onClick={handleSave} className="save-button">
                💾
              </button>
              <button onClick={handleCancel} className="cancel-button">
                ❌
              </button>
            </div>
          </div>
        ) : (
          <div className="todo-text-container">
            <span className="todo-text">{todo.text}</span>
            <span className="todo-date">{todo.createdAt}</span>
          </div>
        )}
      </div>

      {!isEditing && (
        <div className="todo-actions">
          <button
            onClick={() => setIsEditing(true)}
            className="edit-button"
            aria-label="Chỉnh sửa"
          >
            ✏️
          </button>
          <button
            onClick={onDelete}
            className="delete-button"
            aria-label="Xóa"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;