import React from 'react'

import Section from './Section'
import Button from './Button'
import Buttons from './Buttons'

function AddCard() {
	return (
		<Section color='black' title='Add Custom Template'>
			<Buttons>
				<Button>
					<span className='icon is-large'>
						<i className='fas fa-screwdriver'></i>
					</span>
					<label>Create</label>
				</Button>
			</Buttons>
		</Section>
	)
}

export default AddCard
