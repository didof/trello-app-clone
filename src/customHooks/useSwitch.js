import { useState } from 'react'

function useSwitch(opts) {
	const [counter, setCounter] = useState(0)

	const switcher = () => {
		if (counter + 1 === opts.length) setCounter(0)
		else setCounter((prevCounter) => prevCounter + 1)
	}

	return [opts[counter], switcher]
}

export default useSwitch
