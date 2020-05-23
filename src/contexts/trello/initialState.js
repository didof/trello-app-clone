export default {
	template_tutorial: {
		tasks: [
			{ id: 'task-1', content: 'Create a New Awesome Idea' },
			{ id: 'task-2', content: 'Sort some Ideas' },
			{ id: 'task-3', content: 'Remove a Bad Idea' },
			{ id: 'task-4', content: 'Finally complete an Idea' },
		],
		columns: [
			{
				id: 'column-1',
				title: 'Idea',
				taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
				icon: 'lightbulb',
			},
			{
				id: 'column-2',
				title: 'Done',
				taskIds: [],
				icon: 'beer',
			},
		],
		columnOrder: ['column-1', 'column-2'],
	},
	template_minimal: {
		tasks: [
			{ id: 'task-1', content: 'Create a New Awesome Idea' },
			{ id: 'task-2', content: 'Sort some Ideas' },
			{ id: 'task-3', content: 'Remove a Bad Idea' },
			{ id: 'task-4', content: 'Finally complete an Idea' },
		],
		columns: [
			{
				id: 'column-1',
				title: 'Idea',
				taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
				icon: 'lightbulb',
			},
			{
				id: 'column-2',
				title: 'Done',
				taskIds: [],
				icon: 'beer',
			},
		],
		columnOrder: ['column-1', 'column-2'],
	},
}
