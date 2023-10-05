import { IProject } from './../types/IProject'
export const projectsData: IProject[] = [
	{
		img: '/img/project1.png',
		name: 'Personal Website',
		desc: 'My personal website, I created this website to display my profile, skills and projects. As well as my place to try new technology.',
		stack: ['Next.js', 'Tailwind', 'Framer'],
		links: {
			git: 'https://github.com/Belt0M/portfolio-next',
		},
		date: new Date('04.10.2023'),
	},
	{
		img: '/img/project2.jpg',
		name: 'Blockchain website',
		desc: 'Website, I created this website to display my profile, skills and projects. As well as my place to try new technology.',
		stack: ['HTML', 'SCSS', 'JavaScript'],
		links: {
			git: 'https://github.com/Belt0M/portfolio-next',
		},
		date: new Date('27.08.2022'),
	},
]
