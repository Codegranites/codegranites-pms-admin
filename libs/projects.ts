export type ProjectCounterProps = {
	id?: number;
	label: string;
	count: number;
};
export type ProjectCardProps = {
	id?: number;
	title: string;
	status: string;
	project_owner: string;
	due_date: string;
};

export const PROJECT_COUNTERS: ProjectCounterProps[] = [
	{
		id: 1,
		label: 'All Projects',
		count: 30
	},
	{
		id: 2,
		label: 'Completed',
		count: 12
	},
	{
		id: 3,
		label: 'In Progress',
		count: 10
	},
	{
		id: 4,
		label: 'Pending',
		count: 8
	}
];

export const PROJECTS: ProjectCardProps[] = [
	{
		id: 1,
		title: 'Emergency Response App',
		status: 'in-progress',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 2,
		title: 'Emergency Response App',
		status: 'pending',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 3,
		title: 'Emergency Response App',
		status: 'completed',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 4,
		title: 'Emergency Response App',
		status: 'in-progress',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 5,
		title: 'Emergency Response App',
		status: 'pending',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 6,
		title: 'Emergency Response App',
		status: 'completed',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 7,
		title: 'Emergency Response App',
		status: 'in-progress',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 8,
		title: 'Emergency Response App',
		status: 'pending',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	},
	{
		id: 9,
		title: 'Emergency Response App',
		status: 'completed',
		project_owner: 'Karl Mbemba',
		due_date: '12/04/2024'
	}
];
