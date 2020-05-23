import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { TemplateContext } from '../../contexts/templates/context'

function Navbar() {
	const [state, dispatch] = useContext(TemplateContext)

	const links = [
		{ url: '/', label: 'Welcome', action: 'reset_status' },
		{ url: '/dashboard', label: 'Dashboard' },
		{ url: '/info', label: 'Info' },
	].map((link, index) => {
		return (
			<NavLink
				className='navbar-item'
				to={link.url}
				key={index}
				onClick={link.action ? () => dispatch({ type: link.action }) : null}
			>
				{link.label}
			</NavLink>
		)
	})

	return (
		<nav className='navbar is-transparent is-light'>
			<div className='navbar-brand'>
				<div
					className='navbar-burger burger'
					data-target='navbarExampleTransparentExample'
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div id='navbarExampleTransparentExample' className='navbar-menu'>
				<div className='navbar-start'>{links}</div>
			</div>
		</nav>
	)
}

export default Navbar
