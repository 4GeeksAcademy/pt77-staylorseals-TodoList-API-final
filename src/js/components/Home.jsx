import React, { useState } from "react";


const Home = () => {
	
	const [todos, setTodos] = useState(["check email", "do laundry"]);	
	const [inputValue, setInputValue] = useState("");
	
	const addTodo = () => {
		if (inputValue.trim() !== '') {
			setTodos([...todos, inputValue]);
			setInputValue("");
		}
	};
	
	const handleInputChange = (event) => {
			setInputValue(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			addTodo();
		}
	};

	const deleteTodo = (indexToDelete) => {
		setTodos(todos.filter((_, index) => index !== indexToDelete));
	};

	return (
			<div className="home-container">
				<h1>ToDo List</h1>
				<div>
					<input 
						type="text" 
						placeholder="What needs to be done?" 
						value={inputValue} 
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
					/>
					<button type="button" onClick={addTodo}>
						Add
					</button>
				</div>
				<ul>
					{todos.length === 0 ? (
						<li className="empty-list">No tasks, add a task</li>
					) : (
						todos.map((todo, index) => (
							<li key={index} className="todo-item">
								{todo}
								<button
									className="delete-button"
									onClick={() => deleteTodo(index)}
								>
									Delete
								</button>
							</li>
					)))
					}
				</ul>
			</div>
		
	);
};

export default Home;