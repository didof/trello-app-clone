import React, { useEffect, useRef } from 'react'

import { replaceCharts } from '../../utils/replace'
import { capitalize } from '../../utils/transform'

function Hero({ color, size, title, subtitle }) {
	const heroRef = useRef()
	const subtitleRef = useRef()

	useEffect(() => {
		if (!title) throw new Error('please, provide a Title for the Hero component')

		let givenColor = 'secondary'
		let givenSize = 'small'

		if (color) givenColor = color
		if (size) givenSize = size

		if (!subtitle) {
			subtitleRef.current.display = 'none'
		} else {
			subtitleRef.current.innerHTML = replaceCharts(capitalize(subtitle))
		}

		heroRef.current.classList.add(`is-${givenColor}`)
		heroRef.current.classList.add(`is-${givenSize}`)
	}, [color, size, subtitle, title])

	return (
		<section className='hero is-bold' ref={heroRef}>
			<div className='hero-body has-text-centered'>
				<div className='container'>
					<h1 className='title is-1'>{capitalize(title, true)}</h1>
					<span className='divider'></span>
					<span className='subtitle is-3 has-text-grey-darker' ref={subtitleRef} />
				</div>
			</div>
		</section>
	)
}

export default Hero
