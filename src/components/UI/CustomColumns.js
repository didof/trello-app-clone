import React from 'react'

function CustomColumns({ children, numCols = 3 }) {
	if(!children) return <div></div>

	let width
	switch (parseInt(numCols)) {
		case 2:
			width = 'is-half'
			break
		case 4:
			width = 'is-one-quarter'
			break
		default:
			width = 'is-one-third'
	}

	let rest
	let centeredChildIds
	let childrenCopy
	if (children.length > numCols) {
		rest = children.length % numCols

		if (rest > 0) {
			centeredChildIds = []
			childrenCopy = Array.from(children)
			for (let i = 0; i < rest; i++) {
				let removed = childrenCopy.pop()
				centeredChildIds.push(removed.props.id)
			}
		}
	}

	function generateChild(child) {
		function childTemplate(isWidth, isNarrow) {
			let updatedClass = 'column'
			if (isWidth) updatedClass += ` ${isWidth}`
         if (isNarrow) updatedClass += ' is-narrow'

			return (
				<div className={updatedClass} key={`column-${child.props.id}`}>
					{child}
				</div>
			)
		}

		if (children.length <= numCols) return childTemplate()

		if (children.length > numCols && rest === 0) return childTemplate(width)

      let childId = child.props.id

      if(!centeredChildIds.indexOf(childId)) {
         return childTemplate(width, true)
      } else {
         return childTemplate(width)
      }
	}

	return (
		<div className='columns is-multiline is-centered' style={{ marginTop: 18 }}>
			{children.map((child) => {
				return generateChild(child)
			})}
		</div>
	)
}

export default CustomColumns
