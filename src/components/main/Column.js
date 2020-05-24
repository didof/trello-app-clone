import React, { useContext } from 'react'
import { TrelloContext } from '../../contexts/trello/context'

import Task from './Task'

import AddTask from './AddTask'

import { capitalize } from '../../utils/transform'

import { Droppable } from 'react-beautiful-dnd'

function Column({ id }) {
	const [state, dispatch] = useContext(TrelloContext)
	const column = state.columns.find((column) => column.id === id)
	const tasks = column.taskIds.map((taskId) => {
		return state.tasks.find((task) => task.id === taskId)
	})
	const addTaskBlock =
		column.id === 'column-idea' ? (
			<AddTask id={column.id} config={column.config} />
		) : null

	const task_actions = {
		handle_removeTask: (taskId) => {
			dispatch({ type: 'remove_task', payload: { columnId: id, taskId } })
		},
	}

	return (
		<div
			id={id}
			className={`panel is-${column.config.color}`}
			style={{ minHeight: 200 }}
		>
			<div className='panel-heading'>
				<span
					className='icon is-medium'
					style={{
						paddingRight: 16,
						marginRight: 16,
						borderRight: '1px solid lightgrey',
					}}
				>
					<i className={`fas fa-lg fa-${column.config.icon}`}></i>
				</span>
				{capitalize(column.title, true)}
			</div>
			<Droppable droppableId={column.id}>
				{(provided, snapshot) => {
					return (
						<div
							ref={provided.innerRef}
							{...provided.droppableProps}
							style={{
								padding: '16px 32px',
								backgroundColor: snapshot.isDraggingOver ? '#eee' : '#fff',
								transition: 'background-color 0.5s 0.2s ease-in-out',
							}}
						>
							{tasks.map((task, index) => {
								if (task) {
									return (
										<Task
											key={task.id}
											task={task}
											index={index}
											config={column.config}
											actions={task_actions}
										/>
									)
								} else return <div>error</div>
							})}
							{provided.placeholder}
						</div>
					)
				}}
			</Droppable>
			{addTaskBlock}
		</div>
	)
}

export default Column
