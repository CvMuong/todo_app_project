import React from 'react';
import './FilterButtons.css';

function FilterButtons({ filter, onFilterChange, completedCount, onClearCompleted }) {
  const filters = [
    { key: 'all', label: 'Tất cả', icon: '📋' },
    { key: 'active', label: 'Đang làm', icon: '⏳' },
    { key: 'completed', label: 'Hoàn thành', icon: '✅' }
  ];

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {filters.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`filter-button ${filter === key ? 'active' : ''}`}
          >
            <span className="filter-icon">{icon}</span>
            <span className="filter-label">{label}</span>
          </button>
        ))}
      </div>

      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="clear-completed-button"
        >
          🧹 Xóa đã hoàn thành ({completedCount})
        </button>
      )}
    </div>
  );
}

export default FilterButtons;