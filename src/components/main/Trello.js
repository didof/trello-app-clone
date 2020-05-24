import React, { useContext } from 'react'

import { TrelloContext } from '../../contexts/trello/context'

import Column from './Column'
import CustomColumns from '../UI/CustomColumns'

import { DragDropContext } from 'react-beautiful-dnd'

function Trello() {
	const [data, dispatch] = useContext(TrelloContext)

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

		const sourceColumn = data.columns.find(
			(column) => column.id === source.droppableId
		)
		const destinationColumn = data.columns.find(
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

			const updatedColumns = Array.from(data.columns).filter(
				(column) => column.id !== updatedColumn.id
			)
			updatedColumns.push(updatedColumn)

			const updatedState = {
				...data,
				columns: updatedColumns,
			}

			dispatch({ type: 'drop_list', payload: updatedState })
			return
		}

		// if drop in another list

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

		const updatedColumns = Array.from(data.columns).filter((column) => {
			return (
				column.id !== source.droppableId && column.id !== destination.droppableId
			)
		})
		updatedColumns.push(updatedSourceColumn)
		updatedColumns.push(updatedDestinationColumn)

		const updatedState = {
			...data,
			columns: updatedColumns,
		}

		dispatch({ type: 'drop_list', payload: updatedState })
	}

	return (
		<DragDropContext onDragStart={handle_dragStart} onDragEnd={handle_dragEnd}>
			<CustomColumns numCols={data.columnOrder.length - 1}>
				{data &&
					data.columnOrder &&
					data.columnOrder.map((columnId) => {
						const column = data.columns.find((column) => column.id === columnId)
						const tasks = column.taskIds.map((taskId) => {
							return data.tasks.find((task) => task.id === taskId)
						})
						return <Column id={columnId} key={columnId} />
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
