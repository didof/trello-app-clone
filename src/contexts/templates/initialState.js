import { v4 as uuid } from 'uuid'

export default {
	templates: [
		{ id: uuid(), label: '1', content: 'lorem' },
		{ id: uuid(), label: '2', content: 'lorem' },
		{ id: uuid(), label: '3', content: 'lorem' },
		{ id: uuid(), label: '4', content: 'lorem' },
		{ id: uuid(), label: '5', content: 'lorem' },
		{ id: uuid(), label: '6', content: 'lorem' },
		{ id: 'add_new_template_card' },
	],
   cards: {
      numCols: 3
   },
	inUse: null
}
