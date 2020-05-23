import React from 'react'

import Task from './Task'

import { Droppable } from 'react-beautiful-dnd'

function Column({ column, tasks }) {
	const style = {
		padding: '16px 32px',
	}

	const updatedClass = `fas fa-lg fa-${column.icon}`

	return (
		<div className='panel' style={{ minHeight: 200 }}>
			<div className='panel-heading'>
				<span className='icon is-medium' style={{marginRight: 16}}>
					<i className={updatedClass}></i>
				</span>
				{column.title}
			</div>
			<Droppable droppableId={column.id}>
				{(provided) => {
					return (
						<div ref={provided.innerRef} {...provided.droppableProps} style={style}>
							{tasks.map((task, index) => {
								return <Task key={task.id} task={task} index={index} />
							})}
							{provided.placeholder}
						</div>
					)
				}}
			</Droppable>
		</div>
	)
}

export default Column
