import React, { useEffect, useRef } from 'react'

import { replaceCharts } from '../../utils/replace'
import { capitalize } from '../../utils/transform'

function Section({ color, size, title, subtitle, children, icon }) {
	const sectionRef = useRef()
	const subtitleRef = useRef()
	const iconRef = useRef()

	useEffect(() => {
		if (!title)
			throw new Error('please, provide a Title for the Section component')

		let givenColor = 'secondary'
		let givenSize = 'small'

		if (color) givenColor = color
		if (size) givenSize = size

		if (!subtitle) {
			subtitleRef.current.display = 'none'
		} else {
			subtitleRef.current.innerHTML = replaceCharts(capitalize(subtitle))
		}

		if (!icon) {
			iconRef.current.remove()
		} else {
			iconRef.current.childNodes[0].classList.add(`fa-${icon}`)
		}

		sectionRef.current.classList.add(`is-${givenColor}`)
		sectionRef.current.classList.add(`is-${givenSize}`)
	}, [color, size, title, subtitle, icon])

	return (
		<section className='section' ref={sectionRef}>
			<h3 className='title is-3 has-text-centered'>
				<span className='icon' style={{ marginRight: 32 }} ref={iconRef}>
					<i className='fas'></i>
				</span>
				{capitalize(title, true)}
			</h3>
			<span className='divider'></span>
			<div
				className='subtitle is-4 has-text-grey-darker'
				style={{ paddingLeft: 32, borderLeft: '3px solid lightgrey' }}
				ref={subtitleRef}
			></div>
			<div className='container has-text-dark'>{children}</div>
		</section>
	)
}

export default Section
