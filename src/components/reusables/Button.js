import React, { useEffect, useRef } from 'react'

function Button({ children, isFullWidth, click }) {
	let buttonRef = useRef()

	useEffect(() => {
		if (isFullWidth) buttonRef.current.classList.add('is-fullwidth')
	}, [isFullWidth])

	return (
		<button className='button is-secondary' ref={buttonRef} onClick={click}>
			{children}
		</button>
	)
}

export default Button
