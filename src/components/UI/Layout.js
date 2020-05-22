import React from 'react'

import UIContextProvider from '../../contexts/UI/context'
import TemplateContextProvider from '../../contexts/templates/context'

import Navbar from './Navbar'
import Modal from './Modal'

function Layout({ children }) {
	return (
		<UIContextProvider>
			<TemplateContextProvider>
				<Modal />
				<Navbar />
				{children}
			</TemplateContextProvider>
		</UIContextProvider>
	)
}

export default Layout
