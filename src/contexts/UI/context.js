import React, { createContext, useReducer } from 'react'
import UIReducer from './reducer'
import initialState from './initialState'

export const UIContext = createContext()

function UIContextProvider({children}) {
   const [state, dispatch] = useReducer(UIReducer, initialState)
   
   return (
      <UIContext.Provider value={[ state, dispatch ]}>
         {children}
      </UIContext.Provider>
   )
}

export default UIContextProvider
