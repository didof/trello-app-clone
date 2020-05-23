import { v4 as uuid } from 'uuid'

export default {
	templates: [
		{
			id: 'template_tutorial',
			label: 'Tutorial',
			content:
				'A simple point of start. All tutorial-modal are active for they explain the usage. You can disabled them at any point and just keep going.',
		},
		{
			id: 'template_minimal',
			label: 'Minimal',
			content:
				'You get the basic set on which you can build up your own personal workplace, adding only what you need.',
		},
		{ id: uuid(), label: '3', content: 'lorem' },
		{ id: uuid(), label: '4', content: 'lorem' },
		{ id: uuid(), label: '5', content: 'lorem' },
		{ id: uuid(), label: '6', content: 'lorem' },
		{ id: 'add_new_template_card' },
	],
	cards: {
		numCols: 3,
	},
	inUse: null,
}
