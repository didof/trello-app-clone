import React, { useRef, useContext } from 'react'
import history from '../../history'

import { TemplateContext } from '../../contexts/templates/context'

import AddCard from './AddCard'
import Button from '../reusables/Button'

function Card({ id, label, content }) {
	const [ state, dispatch ] = useContext(TemplateContext)

	const buttonsRef = useRef()

	if (id === 'add_new_template_card') return <AddCard />

	function handle_enterCard() {
		buttonsRef.current.style.visibility = 'visible'
	}

	function handle_leaveCard() {
		buttonsRef.current.style.visibility = 'hidden'
	}

	function handle_deleteTemplate() {
		dispatch({ type: 'remove_template', payload: id })
	}

	function handle_pickTemplate() {
		dispatch({ type: 'pick_template', payload: id })
		history.push('/dashboard')
	}

	return (
		<div
			className='card'
			onMouseEnter={handle_enterCard}
			onMouseLeave={handle_leaveCard}
			style={{ minHeight: 230 }}
		>
			<header className='card-header'>
				<div className='card-header-title'>
					<p className='title is-4'>{label}</p>
				</div>
				<span className='card-header-icon' aria-label='more options'>
					<span className='icon'>
						<i className='fas fa-angle-down' aria-hidden='true'></i>
					</span>
				</span>
			</header>
			<div className='card-content'>
				<div className='content'>
					{content}
					{/* <br /> */}
					{/* <time dateTime='2016-1-1'>11:09 PM - 1 Jan 2016</time> */}
				</div>
			</div>
			<footer
				className='buttons has-haddons is-centered'
				ref={buttonsRef}
				style={{
					visibility: 'hidden',
					position: 'absolute',
					width: '100%',
					padding: 5,
					bottom: 0,
				}}
			>
				<Button click={handle_pickTemplate}>Pick</Button>
				<Button>Edit</Button>
				<Button click={handle_deleteTemplate}>Delete</Button>
			</footer>
		</div>
	)
}

export default Card
