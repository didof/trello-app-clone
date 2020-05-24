import React, { useEffect, useRef } from 'react'

function Flexer({ children, toggle = true }) {
	const flexerRef = useRef()
	useEffect(() => {
		flexerRef.current.style.visibility = toggle ? 'visible' : 'hidden'
	}, [toggle])

	const style = {
		height: '100%',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}

	return (
		<div style={{ style }} ref={flexerRef}>
			{children}
		</div>
	)
}

export default Flexer
