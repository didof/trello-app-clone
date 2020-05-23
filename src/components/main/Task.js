import React, { useState } from 'react'
import useEditor from '../../customHooks/useEditor'
import useToggle from '../../customHooks/useToggle'

import Handle from './Handle'

import { Draggable } from 'react-beautiful-dnd'

import { capitalize } from '../../utils/transform'

function Task({ task, index, config }) {
	const style = {
		backgroundColor: 'white',
		border: '1px solid lightgrey',
		boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.1)',
		padding: 0,
		marginBottom: 8,
		borderRadius: 5,
		transition: 'background-color 0.3s ease-in-out'
	}

	const [handle, toggleHandle] = useToggle()
	const [glow, toggleGlow] = useToggle()
	let updatedPanel = glow
		? `panel-block has-background-${config.color}`
		: 'panel-block has-background-white-ter'

	const handle_toggleHandle = () => {
		toggleHandle()
		if (!task.config.editable) return
		toggleGlow()
	}

	const [editor, toggleEditor] = useEditor(
		capitalize(task.content),
		task.config.editable
	)

	const handle_enterTask = (e) => {
		e.preventDefault()
		if (!task.config.editable) return
		toggleEditor()
	}

	const handle_leaveEdit = (e) => {
		e.preventDefault()
		if (!task.config.editable) return
		toggleGlow(false)
		toggleEditor()
	}

	return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => {
				return (
					<div
						className='task'
						id={task.id}
						ref={provided.innerRef}
						{...provided.draggableProps}
						onMouseEnter={handle_toggleHandle}
						onMouseLeave={handle_toggleHandle}
						onContextMenu={handle_enterTask}
						onBlur={handle_leaveEdit}
					>
						<div className={updatedPanel} style={style}>
							<div className='columns' style={{ margin: 0 }}>
								<div
									className='column is-one-fifth'
									style={{
										visibility: handle ? 'visible' : 'hidden',
										paddingRight: 4,
										marginRight: 8,
										minHeight: 40,
									}}
								>
									<Handle {...provided.dragHandleProps} />
								</div>
								<div className='column'>{editor}</div>
							</div>
						</div>
					</div>
				)
			}}
		</Draggable>
	)
}

export default Task
