import React, { createContext, useReducer, useContext } from 'react'
import TrelloReducer from './reducer'
import initialState from './initialState'

export const TrelloContext = createContext()

function TrelloContextProvider({ children }) {

	const [state, dispatch] = useReducer(TrelloReducer, initialState)

	return (
		<TrelloContext.Provider value={[state, dispatch]}>
			{children}
		</TrelloContext.Provider>
	)
}

export default TrelloContextProvider
