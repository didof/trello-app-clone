import React, { useState } from 'react'
import useEditor from '../../customHooks/useEditor'
import useToggle from '../../customHooks/useToggle'

import Handle from './Handle'
import Button from '../reusables/Button'
import Buttons from '../reusables/Buttons'

import { Draggable } from 'react-beautiful-dnd'

import { capitalize } from '../../utils/transform'

function Task({ task, index, config, actions }) {
	const style = {
		backgroundColor: 'white',
		border: '1px solid lightgrey',
		boxShadow: '2px 2px 3px rgba(0, 0, 0, 0.1)',
		padding: 16,
		marginBottom: 8,
		borderRadius: 5,
		transition: 'background-color 0.3s ease-in-out',

		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}

	const [handle, toggleHandle] = useToggle()
	const [glow, toggleGlow] = useToggle()

	const handle_toggleHandle = () => {
		toggleHandle()
		if (!task.config.editable) return
		toggleGlow()
	}

	const [editor, toggleEditor] = useEditor(
		capitalize(task.content),
		task.config.editable
	)

	const handle_editTask = () => {
		if (task.config.editable) {
			toggleEditor()
		}
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
						// onMouseEnter={handle_toggleHandle}
						// onMouseLeave={handle_toggleHandle}
						// onContextMenu={handle_enterTask}
						// onBlur={handle_leaveEdit}
					>
						<div
							className={`panel-block has-background-${
								glow ? config.color : 'white-ter'
							}`}
							style={style}
						>
							<Handle {...provided.dragHandleProps} />
							<div>{editor}</div>
							<div>
								<Buttons addons>
									<Button
										styles={['info', 'no-border', 'outlined', 'rounded']}
										icon="pencil-alt"
										click={handle_editTask}
									></Button>
									<Button
										styles={['warning', 'no-border', 'outlined', 'rounded']}
										icon='minus'
										click={() => actions.handle_removeTask(task.id)}
									></Button>
								</Buttons>
							</div>
						</div>
					</div>
				)
			}}
		</Draggable>
	)
}

export default Task
