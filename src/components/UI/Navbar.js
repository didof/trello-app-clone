import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
	const links = [
		{ url: '/dashboard', label: 'Dashboard' },
		{ url: '/info', label: 'Info' },
	].map((link, index) => (
		<NavLink className='navbar-item' to={link.url} key={index}>
			{link.label}
		</NavLink>
	))

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
