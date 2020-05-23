import React, { useRef, useContext } from 'react'
import history from '../../history'

import { TemplateContext } from '../../contexts/templates/context'
import { TrelloContext } from '../../contexts/trello/context'

import AddCard from './AddCard'
import Buttons from '../reusables/Buttons'
import Button from '../reusables/Button'

function Card({ id, label, content }) {
	const [TemplateState, TemplateDispatch] = useContext(TemplateContext)
	const [TrelloState, TrelloDispatch] = useContext(TrelloContext)

	const buttonsRef = useRef()

	if (id === 'add_new_template_card') return <AddCard />

	function handle_enterCard() {
		buttonsRef.current.style.visibility = 'visible'
	}

	function handle_leaveCard() {
		buttonsRef.current.style.visibility = 'hidden'
	}

	function handle_deleteTemplate() {
		TemplateDispatch({ type: 'remove_template', payload: id })
	}

	function handle_pickTemplate() {
		TrelloDispatch({ type: 'pick_template', payload: id })
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
				ref={buttonsRef}
				style={{
					visibility: 'hidden',
				}}
			>
				<Buttons addons>
					<Button
						click={handle_pickTemplate}
						styles={['small', 'addons', 'primary', 'inverted']}
						icon='edit'
					>
						Pick
					</Button>
					<Button styles={['small', 'addons', 'info', 'inverted']} icon='edit'>
						Edit
					</Button>
					<Button
						click={handle_deleteTemplate}
						styles={['small', 'addons', 'warning', 'outlined']}
						icon='trash'
					>
						Delete
					</Button>
				</Buttons>
			</footer>
		</div>
	)
}

export default Card
