import React, { useEffect, useRef } from 'react'

function Buttons({ children, addons }) {
	const buttonsRef = useRef()

	useEffect(() => {
		if(addons) buttonsRef.current.classList.add('has-addons')
	}, [addons])

	return (
		<div
			className='buttons is-centered'
			style={{ padding: '4px 8px', marginBottom: 8}}
			ref={buttonsRef}
		>
			{children}
		</div>
	)
}

export default Buttons
