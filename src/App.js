import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text.trim(),
            completed: false,
            createdAt: new Date().toLocaleDateString("vi-VN"),
        };
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText.trim() } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const getFilteredTodos = () => {
        switch (filter) {
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const completedCount = todos.filter((todo) => todo.completed).length;
    const activeCount = todos.length - completedCount;

    return (
        <div className="app">
            <div className="app-container">
                <header className="app-header">
                    <h1 className="app-title">✅ Todo App</h1>
                    <p className="app-subtitle">Quản lý công việc thông minh</p>
                </header>

                <main className="app-main">
                    <TodoForm onAddTodo={addTodo} />

                    <div className="app-stats">
                        <span className="stat-item">
                            <span className="stat-number">{activeCount}</span>
                            <span className="stat-label">Đang làm</span>
                        </span>
                        <span className="stat-item">
                            <span className="stat-number">
                                {completedCount}
                            </span>
                            <span className="stat-label">Hoàn thành</span>
                        </span>
                        <span className="stat-item">
                            <span className="stat-number">{todos.length}</span>
                            <span className="stat-label">Tổng cộng</span>
                        </span>
                    </div>

                    <FilterButtons
                        filter={filter}
                        onFilterChange={setFilter}
                        completedCount={completedCount}
                        onClearCompleted={clearCompleted}
                    />

                    <TodoList
                        todos={getFilteredTodos()}
                        onToggleTodo={toggleTodo}
                        onDeleteTodo={deleteTodo}
                        onEditTodo={editTodo}
                    />

                    {todos.length === 0 && (
                        <div className="empty-state">
                            <div className="empty-icon">📝</div>
                            <h3>Chưa có công việc nào</h3>
                            <p>Hãy thêm công việc đầu tiên của bạn!</p>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default App;
