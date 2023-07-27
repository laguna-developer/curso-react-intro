import React from "react";
import { TodoCounter } from "../todo_counter/TodoCounter";
import { TodoSearch } from "../todo_search/TodoSearch";
import { TodoList } from "../todo_list/TodoList";
import { TodoItem } from "../todo_item/TodoItem";
import { TodosLoading } from "../todos_loading/TodosLoading";
import { TodosError } from "../todos_error/TodosError";
import { EmptyTodos } from "../todos_empty/EmptyTodos";
import { CreateTodoButton } from "../create_todo_button/CreateTodoButton";
import { TodoForm } from "../todo_form/TodoForm";
import { Modal } from "../modal/Modal";
import { TodoContext } from "../todo_context/TodoContext";

function AppUI() {
	const {
		loading,
		error,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal,
	} = React.useContext(TodoContext);

	return (
		<>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{loading && (
					<>
						<TodosLoading />
					</>
				)}
				{error && <TodosError />}
				{!loading && searchedTodos.length === 0 && <EmptyTodos />}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton
				setOpenModal={ setOpenModal } />

			{openModal && (
				<Modal>
					<TodoForm />
				</Modal>
			)}
		</>
	);
}

export { AppUI };
