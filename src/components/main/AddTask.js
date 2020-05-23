import React, { useState, useRef, useContext } from 'react'
import useChange from '../../customHooks/useChange'

import { TrelloContext } from '../../contexts/trello/context'

import Buttons from '../reusables/Buttons'
import Button from '../reusables/Button'

function AddTask({ id, config }) {
	const [state, dispatch] = useContext(TrelloContext)

	const textareaRef = useRef()

	let textareaUptated = `textarea is-fullwidth is-${config.color}`

	const [face, setFace] = useState(true)

	const [value, bindValue, setValue, resetValue] = useChange('')

	const handle_resetForm = (e) => {
		e.preventDefault()
		setFace(true)
		resetValue()
	}

	const handle_addTask = () => {
		dispatch({ type: 'add_task', payload: { columnId: id, content: value } })
	}

	if (face)
		return (
			<Buttons>
				<Button
					styles={['primary', 'large', 'inverted', 'rounded']}
					icon='plus'
					click={() => setFace(false)}
				></Button>
			</Buttons>
		)

	return (
		<div
			className='panel-block'
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onContextMenu={handle_resetForm}
		>
			<div className='field'>
				<div className='control'>
					<textarea
						className={textareaUptated}
						placeholder='Add Task'
						rows='5'
						style={{ width: '100%' }}
						{...bindValue}
						ref={textareaRef}
					></textarea>
				</div>
			</div>

			<Buttons addons>
				<Button
					styles={['success', 'outlined']}
					icon={config.icon}
					click={handle_addTask}
				>
					Add
				</Button>
				<Button
					styles={['warning', 'outlined']}
					icon='times'
					click={handle_resetForm}
				>
					Cancel
				</Button>
			</Buttons>
		</div>
	)
}

export default AddTask
