import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../history'

import Layout from './UI/Layout'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Info from './pages/Info'

function App() {
	return (
		<Router history={history}>
			<Layout>
				<Switch>
					<Route exact path="/" component={Welcome} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/info" component={Info} />
				</Switch>
			</Layout>
		</Router>
	)
}

export default App
