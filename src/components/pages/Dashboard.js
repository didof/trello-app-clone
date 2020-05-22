import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import { TemplateContext } from '../../contexts/templates/context'
import { UIContext } from '../../contexts/UI/context'

function Dashboard() {
	const [TemplateState] = useContext(TemplateContext)
	const [UIState, UIDispatch] = useContext(UIContext)

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

	return (
		<div>
			<p className='title is-1'>Dashboard</p>
			<p className='subtitle'>
				You have picked the template {TemplateState.inUse.label}
			</p>
		</div>
	)
}

export default Dashboard
