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
		desc: 'Freelance Blockchain Company landing page, created in a common web stack.',
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
	{
		img: '/img/project4.png',
		name: 'Aventu Editor',
		desc: 'The application was created with the possibility of creating your own books or stories and subsequently creating your own plot and voiceover using the React Flow editor.',
		stack: ['React', 'TypeScript', 'Tailwind', 'RTK Query', 'React Flow'],
		// links: {
		// 	git: 'https://github.com/Belt0M/dashboard',
		// 	website: 'https://belt0m-dashboard.vercel.app/',
		// },
		date: new Date('2023.10.25'),
	},
	{
		img: '/img/project5.png',
		name: 'EIOTClub Website',
		desc: 'The website for EIOTClub, which delivers SIM cards for IoT devices.',
		stack: ['Next.js', 'TypeScript', 'Tailwind'],
		links: {
			git: 'https://github.com/Belt0M/eiotclub',
			website: 'https://www.eiotclub.com/',
		},
		date: new Date('2023.10.25'),
	},
]
