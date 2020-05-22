import initialState from './initialState'

export default (state, action) => {
	switch (action.type) {
		case 'open_modal':
			return {
				...state,
				modal: {
					display: true,
					title: action.payload.title,
					content: action.payload.content,
				},
			}
		case 'close_modal':
			return initialState
		default:
			return state
	}
}
