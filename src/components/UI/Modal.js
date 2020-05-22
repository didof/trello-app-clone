import React, { useEffect, useContext } from 'react'

import { UIContext } from '../../contexts/UI/context'

function Modal() {
	const [state, dispatch] = useContext(UIContext)

	const { modal } = state

	useEffect(() => {
		let el = document.querySelector('.modal')
		if (modal.display) el.classList.add('is-active')
		else el.classList.remove('is-active')
	}, [modal])

	const handle_closeModal = () => {
		dispatch({ type: 'close_modal' })
	}

	return (
		<div className='modal'>
			<div className='modal-background' onClick={handle_closeModal}></div>
			<div className='modal-card'>
				<header className='modal-card-head'>
					<p className='modal-card-title'>{modal.title}</p>
					<button
						className='delete'
						aria-label='close'
						onClick={handle_closeModal}
					></button>
				</header>
				<section className='modal-card-body has-text-dark'>{modal.content}</section>
				<footer className='modal-card-foot'>
					<button className='button is-success'>Proceed</button>
					{/* <button className='button'>Cancel</button> */}
				</footer>
			</div>
		</div>
	)
}

export default Modal
