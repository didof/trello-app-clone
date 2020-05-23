import React, { useState } from 'react'

import Column from './Column'
import CustomColumns from '../UI/CustomColumns'

import { DragDropContext } from 'react-beautiful-dnd'

function Trello({ data }) {
	const [state, setState] = useState(data)

	const handle_dragStart = (result) => {
		let el = document.getElementById(result.draggableId)
		el.style.color = 'red'
	}

	const handle_dragEnd = (result) => {
		reset()

		const { destination, source, draggableId } = result

		if (!destination) return

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return

		const sourceColumn = state.columns.find(
			(column) => column.id === source.droppableId
		)
		const destinationColumn = state.columns.find(
			(column) => column.id === destination.droppableId
		)

		const updatedTaskIds = Array.from(sourceColumn.taskIds)
		updatedTaskIds.splice(source.index, 1)
		if (sourceColumn === destinationColumn) {
			updatedTaskIds.splice(destination.index, 0, draggableId)

			const updatedColumn = {
				...sourceColumn,
				taskIds: updatedTaskIds,
			}

			const updatedColumns = Array.from(state.columns).filter(
				(column) => column.id !== updatedColumn.id
			)
			updatedColumns.push(updatedColumn)

			setState((prevState) => ({
				...prevState,
				columns: updatedColumns,
			}))
			return
		}

		const updatedSourceColumn = {
			...sourceColumn,
			taskIds: updatedTaskIds,
		}

		const updatedDestinationTaskIds = [...destinationColumn.taskIds]
		updatedDestinationTaskIds.splice(destination.index, 0, draggableId)

		const updatedDestinationColumn = {
			...destinationColumn,
			taskIds: updatedDestinationTaskIds,
		}

		const updatedColumns = Array.from(state.columns).filter(
			(column) =>
				column.id === updatedSourceColumn || column.id === updatedDestinationColumn
		)
		console.log(updatedColumns)
		updatedColumns.push(updatedSourceColumn)
		updatedColumns.push(updatedDestinationColumn)

		setState((prevState) => ({
			...prevState,
			columns: updatedColumns,
		}))
	}

	return (
		<DragDropContext onDragStart={handle_dragStart} onDragEnd={handle_dragEnd}>
			<CustomColumns numCols='5'>
				{state.columnOrder.map((columnId) => {
					const column = state.columns.find((column) => column.id === columnId)
					const tasks = column.taskIds.map((taskId) => {
						return state.tasks.find((task) => task.id === taskId)
					})

					return (
						<Column key={columnId} id={columnId} column={column} tasks={tasks} />
					)
				})}
			</CustomColumns>
		</DragDropContext>
	)
}

export default Trello

function reset() {
	let els = document.querySelectorAll('.task')
	els.forEach((el) => (el.style.color = 'inherit'))
}
