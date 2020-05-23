import initialState from './initialState'

export default (state, action) => {
	switch (action.type) {
		case 'initialize_data':
			return action.payload
		default:
			return state
	}
}
