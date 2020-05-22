import React, { createContext, useReducer } from 'react'
import TemplateReducer from './reducer'
import initialState from './initialState'

export const TemplateContext = createContext()

function TemplateContextProvider({children}) {
   const [state, dispatch] = useReducer(TemplateReducer, initialState)
   
   return (
      <TemplateContext.Provider value={[ state, dispatch ]}>
         {children}
      </TemplateContext.Provider>
   )
}

export default TemplateContextProvider
