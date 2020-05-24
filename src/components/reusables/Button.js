import React, { useEffect, useRef } from 'react'
import { v4 as uuid } from 'uuid'

function Button({ children, click, styles, icon, cursor = 'pointer' }) {
	let buttonRef = useRef()

	useEffect(() => {
		function addClass(style) {
			buttonRef.current.classList.add(`is-${style}`)
		}

		if (styles) {
			styles.forEach((style) => {
				if (style === 'addons') {
					buttonRef.current.style.margin = '4px 0'
				}
				if (style === 'no-border') {
					buttonRef.current.style.border = 'none'
				}
				addClass(style)
			})
		}

		if(cursor) {
			buttonRef.current.style.cursor = cursor
		}
	}, [styles])

	let slot = children

	if (icon) {
		let updatedIcon = `fas fa-md fa-${icon}`
		if (children && children.length > 0) {
			slot = (
				<>
					<span className='icon'>
						<i className={updatedIcon}></i>
					</span>
					<span className='content'>{children}</span>
				</>
			)
		} else {
			slot = (
				<span className='icon'>
					<i className={updatedIcon}></i>
				</span>
			)
		}
	}

	return (
		<button className='button' ref={buttonRef} onClick={click}>
			{slot}
		</button>
	)
}

export default Button
