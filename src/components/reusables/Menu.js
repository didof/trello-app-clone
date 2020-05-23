import React, { Fragment } from 'react'

import { capitalize } from '../../utils/transform'

function Menu({ links }) {
	return (
		<aside className='menu' style={{ position: 'fixed' }}>
			{links.map(({ label, sections }, index) => (
				<Fragment key={index}>
					<p className='menu-label'>{label}</p>
					<ul className='menu-list'>
						{sections.map((section, index) => (
							<li key={index}>
								<a href={`#${section.id}`}>{capitalize(section.label)}</a>
							</li>
						))}
					</ul>
				</Fragment>
			))}
		</aside>
	)
}

export default Menu
