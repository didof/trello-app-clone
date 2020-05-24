import initialState from './initialState'
import { v4 as uuid } from 'uuid'

export default (state, action) => {
	let updatedColumn
	let updatedColumnBin
	let filteredColumns
	let updatedColumns

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

			updatedColumn = Array.from(state.columns)
			updatedColumn = updatedColumn.find(
				(column) => column.id === action.payload.columnId
			)
			updatedColumn.taskIds.push(newTask.id)

			updatedColumns = Array.from(state.columns).filter(
				(column) => column.id !== action.payload.columnId
			)
			updatedColumns.push(updatedColumn)

			const updatedState = {
				...state,
				columns: updatedColumns,
				tasks: updatedTasks,
			}

			return updatedState

		case 'remove_task':
			updatedColumn = getColumn(state, action.payload.columnId)
			updatedColumn = removeTaskIdFromColumn(updatedColumn, action.payload.taskId)
			updatedColumnBin = addTaskIdToColumn(getColumn(state), action.payload.taskId)
			filteredColumns = filterOutColumns(state, [
				action.payload.columnId,
				'column-bin',
			])
			updatedColumns = addColumns(filteredColumns, [
				updatedColumn,
				updatedColumnBin,
			])

			return {
				...state,
				columns: updatedColumns,
			}
		default:
			return state
	}
}

function getColumn(raw, columnId = 'column-bin', update) {
	let updatedColumn = Array.from(raw.columns)
	if (!update) {
		return updatedColumn.find((column) => column.id === columnId)
	}
	return updatedColumn.taskIds.push(update)
}

function removeTaskIdFromColumn(column, id) {
	let updatedTaskIds = column.taskIds.filter((taskId) => taskId !== id)
	return {
		...column,
		taskIds: updatedTaskIds,
	}
}

function addTaskIdToColumn(column, id) {
	let updatedTaskIds = [...column.taskIds].concat(id)
	return {
		...column,
		taskIds: updatedTaskIds,
	}
}

function filterOutColumns(state, filterColumnIds) {
	return [...state.columns].filter((column) => {
		return filterColumnIds.indexOf(column.id) === -1
	})
}

function addColumns(columns, addColumns) {
	let updatedColumns = [...columns]
	addColumns.forEach((column) => {
		updatedColumns.push(column)
	})
	return updatedColumns
}
