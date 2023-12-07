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
	project_manager?: string;
	due_date: string;
	start_date?: string;
	description?: string;
	total_cost?: number;
	initial_payment?: number;
};

export const PROJECTS: ProjectCardProps[] = [
	{
		id: 1,
		title: 'Emergency &Response App@#$',
		status: 'in-progress',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 2,
		title: 'Emergency Response App',
		status: 'pending',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 3,
		title: 'Emergency Response App',
		status: 'completed',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 4,
		title: 'Emergency Response App',
		status: 'in-progress',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 5,
		title: 'Emergency Response App',
		status: 'pending',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 6,
		title: 'Emergency Response App',
		status: 'completed',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 7,
		title: 'Emergency Response App',
		status: 'in-progress',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 8,
		title: 'Emergency Response App',
		status: 'pending',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	},
	{
		id: 9,
		title: 'Emergency Response App',
		status: 'completed',
		project_owner: 'Karl Mbemba',
		project_manager: 'Moses Oliseh',
		due_date: '12/04/2024',
		start_date: '04/02/2024',
		total_cost: 5000,
		initial_payment: 3500,
		description: `Empower communities and individuals with the Emergency Response App, a groundbreaking solution designed to enhance and expedite emergency assistance. This app integrates real-time location tracking, instant communication features, and emergency service coordination to provide swift response during critical situations. With an intuitive interface and seamless collaboration tools, the Emergency Response App is your go-to resource for rapid and effective crisis management. Prioritize safety and responsiveness with this essential tool for emergency situations.`
	}
];

export const PROJECT_COUNTERS: ProjectCounterProps[] = [
	{
		id: 1,
		label: 'All Projects',
		count: PROJECTS.length
	},
	{
		id: 2,
		label: 'Completed',
		count: PROJECTS.filter((status) => status.status === 'completed').length
	},
	{
		id: 3,
		label: 'In Progress',
		count: PROJECTS.filter((status) => status.status === 'in-progress').length
	},
	{
		id: 4,
		label: 'Pending',
		count: PROJECTS.filter((status) => status.status === 'pending').length
	}
];
