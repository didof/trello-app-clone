import initialState from './initialState'
import { v4 as uuid } from 'uuid';

export default (state, action) => {
	switch (action.type) {
		case 'pick_template':
			return state[action.payload]
		case 'drop_list':
			return action.payload
		case 'add_task':
			const newTask = {
				id: uuid(),
				config: { editable: true },
				content: action.payload.content,
			}
			const updatedTasks = Array.from(state.tasks)
			updatedTasks.push(newTask)

			let updatedColumn = Array.from(state.columns)
			updatedColumn = updatedColumn.find(
				(column) => column.id === action.payload.columnId
			)
			updatedColumn.taskIds.push(newTask.id)

			const updatedColumns = Array.from(state.columns).filter(
				(column) => column.id !== action.payload.columnId
			)
			updatedColumns.push(updatedColumn)

			const updatedState = {
				...state,
				columns: updatedColumns,
				tasks: updatedTasks,
			}

			return updatedState
		default:
			return state
	}
}
