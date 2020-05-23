import React, { useState } from 'react'

import Handle from './Handle'

import { Draggable } from 'react-beautiful-dnd'

import { capitalize } from '../../utils/transform'

function Task({ task, index }) {

	const [showHandle, setShowHandle] = useState(false)
	const handle_showHandle = () => setShowHandle(true)
	const handle_hideHandle = () => setShowHandle(false)

	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => {
				return (
					<div
						className='box task'
						id={task.id}
						ref={provided.innerRef}
						{...provided.draggableProps}
						onMouseEnter={handle_showHandle}
						onMouseLeave={handle_hideHandle}
					>
						<Handle
							{...provided.dragHandleProps}
							style={{ visibility: `${showHandle ? 'visible' : 'hidden'}` }}
						/>
						{capitalize(task.content)}
					</div>
				)
			}}
		</Draggable>
	)
}

export default Task
