import initialState from './initialState'

export default (state, action) => {
	let templatesCopy = Array.from(state.templates)

	switch (action.type) {
		case 'remove_template':
			return {
				...state,
				templates: templatesCopy.filter(
					(template) => template.id !== action.payload
				),
			}
		case 'change_view':
			return {
				...state,
				cards: {
					...state.cards,
					numCols: state.cards.numCols === 4 ? 1 : state.cards.numCols + 1,
				},
			}
		case 'pick_template':
			let templatePicked = templatesCopy.find(
				(template) => template.id === action.payload
			)
			return {
				...state,
				inUse: { id: templatePicked.id, label: templatePicked.label }
			}
		case 'reset_status':
			return initialState
		default:
			return state
	}
}
