export type ProjectMilestoneProps = {
	id?: string;
	title: string;
	status: string;
};

export const PROJECT_MILESTONES: ProjectMilestoneProps[] = [
	{
		id: '1',
		title: 'Project Initiation and planning',
		status: 'completed'
	},
	{
		id: '2',
		title: 'Requirements gathering & Analysis',
		status: 'completed'
	},
	{
		id: '3',
		title: 'Technology stack selection',
		status: 'completed'
	},
	{
		id: '4',
		title: 'Database design and setup',
		status: 'in-progress'
	},
	{
		id: '5',
		title: 'User Interface (UI) design',
		status: 'in-progress'
	},
	{
		id: '6',
		title: 'User authentication and authorization',
		status: 'in-progress'
	},
	{
		id: '7',
		title: 'Document upload and indexing',
		status: 'in-progress'
	},
	{
		id: '8',
		title: 'Search and retrieval functionality',
		status: 'pending'
	},
	{
		id: '9',
		title: 'Security and compliance',
		status: 'pending'
	},
	{
		id: '10',
		title: 'User testing and quality assurance',
		status: 'pending'
	},
	{
		id: '11',
		title: 'Deployment ',
		status: 'pending'
	}
];
