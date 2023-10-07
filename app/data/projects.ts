import { IProject } from './../types/IProject'
export const projectsData: IProject[] = [
	{
		img: '/img/project1.png',
		name: 'Personal Website',
		desc: 'My personal website. Skills list, Latest projects. Theme Toggling, On load animations',
		stack: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
		links: {
			git: 'https://github.com/Belt0M/portfolio-next',
		},
		date: new Date('2023.10.07'),
	},
	{
		img: '/img/project2.jpg',
		name: 'Blockchain website',
		desc: 'Website, I created this website to display my profile, skills and projects. As well as my place to try new technology.',
		stack: ['HTML', 'SCSS', 'JavaScript'],
		date: new Date('2022.07.22'),
	},
	{
		img: '/img/project3.png',
		name: 'Admin Dashboard',
		desc: 'Admin Dashboard using React, TypeScript. Features: - 3 data tables - Text Editor - Color Picker - Kanban board - 6 charts, Dark & Light themes, Color Theme Settings',
		stack: ['React', 'TypeScript', 'Tailwind', 'Syncfusion'],
		links: {
			git: 'https://github.com/Belt0M/dashboard',
			website: 'https://belt0m-dashboard.vercel.app/',
		},
		date: new Date('2022.12.15'),
	},
]
