import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import { UIContext } from '../../contexts/UI/context'
import { TrelloContext } from '../../contexts/trello/context'

import Trello from '../main/Trello'

function Dashboard() {
	// const key = 'trello_app_clone--session-data'

	const [UIState, UIDispatch] = useContext(UIContext)
	const [TrelloState, TrelloDispatch] = useContext(TrelloContext)

	// route guard
	if (TrelloState.template_inUse === null) {
		// let retrivedData = getFromSession(key)
		// if (!retrivedData) {
		UIDispatch({
			type: 'open_modal',
			payload: {
				title: 'Redirected to Welcome Page',
				content:
					'In order to start you first have to select a template or create your own',
			},
		})
		return <Redirect to='/' />
		// }
	}

	return (
		<div className='container'>
			<p className='title is-1 has-text-black'>Dashboard</p>
			<Trello data={TrelloState} />
		</div>
	)
}

export default Dashboard

function saveInSession(key, data) {
	console.log('save in session')
	sessionStorage.clear()
	sessionStorage.setItem(key, JSON.stringify(data))
}

function getFromSession(key) {
	console.log(sessionStorage.getItem(key))
	return JSON.parse(sessionStorage.getItem(key))
}
