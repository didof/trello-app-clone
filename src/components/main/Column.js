import React from 'react'

import Task from './Task'

import AddTask from './AddTask'

import { capitalize } from '../../utils/transform'

import { Droppable } from 'react-beautiful-dnd'

function Column({ column, tasks }) {
	const uptadedIcon = `fas fa-lg fa-${column.config.icon}`
	const updatedColor = `panel is-${column.config.color}`
	const addTaskBlock =
		column.id === 'column-idea' ? <AddTask label={column.title} config={column.config} /> : null

	return (
		<div className={updatedColor} style={{ minHeight: 200 }}>
			<div className='panel-heading'>
				<span
					className='icon is-medium'
					style={{
						paddingRight: 16,
						marginRight: 16,
						borderRight: '1px solid lightgrey',
					}}
				>
					<i className={uptadedIcon}></i>
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
								return (
									<Task key={task.id} task={task} index={index} config={column.config} />
								)
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
