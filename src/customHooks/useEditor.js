import React, { useState } from 'react'
import useToggle from './useToggle'
import useChange from './useChange'

function useEditor(initialValue, editable = true) {
	const [content, bindContent, setContent] = useChange(initialValue)
	const notEditingEditor = (
		<div
			className='content'
			style={{ cursor: editable ? 'pointer' : 'default' }}
		>
			{content}
		</div>
	)

	const editingEditor = (
		<div className='field'>
			<div className='control'>
				<textarea
					className='input'
					type='textarea'
					{...bindContent}
					style={{ minHeight: 100, cursor: 'pointer', width: '100%' }}
				></textarea>
			</div>
		</div>
	)

	const [isEditing, setIsEditing] = useToggle(false)
	let [editor, setEditor] = useState(notEditingEditor)
	editor = isEditing ? editingEditor : notEditingEditor

	const toggle = () => {
		if (!content.length) setContent(initialValue)
		setIsEditing()
	}

	return [editor, toggle]
}

export default useEditor
