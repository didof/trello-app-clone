import React from 'react'

import UIContextProvider from '../../contexts/UI/context'
import TemplateContextProvider from '../../contexts/templates/context'
import TrelloContextProvider from '../../contexts/trello/context'

import Navbar from './Navbar'
import Modal from './Modal'

function Layout({ children }) {
	return (
		<UIContextProvider>
			<TemplateContextProvider>
				<TrelloContextProvider>
					<Modal />
					<Navbar />
					{children}
				</TrelloContextProvider>
			</TemplateContextProvider>
		</UIContextProvider>
	)
}

export default Layout
