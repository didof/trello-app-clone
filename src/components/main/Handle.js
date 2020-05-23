import React from 'react'
import Button from '../reusables/Button'

function Handle(props) {
	return (
		<span
			className='icon is-medium has-text-dark'
			{...props}
			style={{ margin: 0, padding: 0, cursor: 'move' }}
		>
			<i className='fas fa-grip-vertical'></i>
		</span>
	)
}

export default Handle
