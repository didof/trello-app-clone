import { useState } from 'react'

function useChange(initialValue) {

   const [value, setValue] = useState(initialValue)

   const bind = {
      value,
      placeholder: initialValue,
      onChange: (e) => setValue(e.target.value)
   }

   const reset = () => {
      setValue(initialValue)
   }

   return [value, bind, setValue, reset]
}

export default useChange
