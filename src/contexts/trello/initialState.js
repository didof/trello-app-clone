export default {
	template_inUse: null,
	template_tutorial: {
		tasks: [
			{
				id: 'tutorial-1',
				config: { editable: true },
				content: 'Create a New Awesome Idea',
			},
			{ id: 'tutorial-2', config: { editable: true }, content: 'Swap some Ideas' },
			{
				id: 'tutorial-3',
				config: { editable: false },
				content: 'Permanentely Remove some really Bad Idea',
			},
			{
				id: 'tutorial-4',
				config: { editable: true },
				content: 'Complete an Idea',
			},
			{ id: 'tutorial-5', config: { editable: true }, content: 'Edit an Idea' },
			// { id: 'task-3', content: 'Remove a Bad Idea' },
			// { id: 'task-4', content: 'Finally complete an Idea' },
		],
		columns: [
			{
				id: 'column-bin',
				title: 'Bin',
				taskIds: ['tutorial-3'],
				config: {
					color: 'secondary',
					icon: 'trash',
				},
			},
			{
				id: 'column-idea',
				title: 'Idea',
				taskIds: ['tutorial-1', 'tutorial-2', 'tutorial-4', 'tutorial-5'],
				config: {
					color: 'primary',
					icon: 'lightbulb',
				},
			},
			{
				id: 'column-done',
				title: 'Done',
				taskIds: [],
				config: {
					color: 'success',
					icon: 'check',
				},
			},
		],
		columnOrder: ['column-bin', 'column-idea', 'column-done'],
	},
	template_minimal: {
		tasks: [],
		columns: [
			{
				id: 'column-idea',
				title: 'Idea',
				taskIds: [],
				icon: 'lightbulb',
			},
			{
				id: 'column-done',
				title: 'Done',
				taskIds: [],
				icon: 'beer',
			},
		],
		columnOrder: ['column-idea', 'column-done'],
	},
}
