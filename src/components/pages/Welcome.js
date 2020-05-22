import React, { Fragment, useContext } from 'react'

import { TemplateContext } from '../../contexts/templates/context'

import Hero from '../reusables/Hero'
import Section from '../reusables/Section'
import Card from '../reusables/Card'
import Buttons from '../reusables/Buttons'
import Button from '../reusables/Button'

import CustomColumns from '../UI/CustomColumns'

function Welcome() {
	const [ state, dispatch ] = useContext(TemplateContext)

	const templates = state.templates.map((template) => {
		return <Card key={template.id} {...template} />
	})

	function handle_changeView() {
		dispatch({ type: 'change_view' })
	}

	return (
		<Fragment>
			<Hero
				color='primary'
				title='Trello App Clone'
				subtitle='made by <a href="https://github.com/didof">didof</a>'
			/>
			<div className='container'>
				<Section
					color='info'
					title='Pick a Template'
					subtitle='if it is the first time I recommended to choose the option <i>minimal</i>.<br />When you feel ready try to build and save your own template!'
					icon='fingerprint'
				>
					<Buttons>
						<Button click={handle_changeView}>Change View</Button>
					</Buttons>
					<CustomColumns numCols={state.cards.numCols}>{templates}</CustomColumns>
				</Section>
			</div>
		</Fragment>
	)
}

export default Welcome
