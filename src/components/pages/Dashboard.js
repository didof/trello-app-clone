import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { TemplateContext } from '../../contexts/templates/context'
import { UIContext } from '../../contexts/UI/context'
import { TrelloContext } from '../../contexts/trello/context'

import Trello from '../main/Trello'

function Dashboard() {

	const [TemplateState] = useContext(TemplateContext)
	const [UIState, UIDispatch] = useContext(UIContext)
	const [TrelloState, TrelloDispatch] = useContext(TrelloContext)

	if (!TemplateState.inUse) {
		UIDispatch({
			type: 'open_modal',
			payload: {
				title: 'Redirected to Welcome Page',
				content:
					'In order to start you first have to select a template or create your own',
			},
		})
		return <Redirect to='/' />
	}

	const data = TrelloState[TemplateState.inUse.id]

	return (
		<div className='container'>
			<p className='title is-1 has-text-black'>
				Dashboard{' '}
				<span className='has-text-dark is-2'>({TemplateState.inUse.label})</span>
			</p>

			<Trello data={data} />
		</div>
	)
}

export default Dashboard
