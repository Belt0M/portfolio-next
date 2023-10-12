import { ESkillLevels, ISkill } from '../types/ISkill'

export const skillsData: ISkill[] = [
	{
		icon: '/icons/html.png',
		name: 'HTML',
		level: ESkillLevels.advanced,
	},
	{
		icon: '/icons/css.png',
		name: 'CSS',
		level: ESkillLevels.advanced,
	},
	{
		icon: '/icons/js.png',
		name: 'JavaScript',
		level: ESkillLevels.advanced,
	},
	{
		icon: '/icons/ts.png',
		name: 'TypeScript',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/react.png',
		name: 'React',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/redux.png',
		name: 'Redux Toolkit',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/next.png',
		name: 'Next.js',
		level: ESkillLevels.intermediate,
		size: 50,
	},
	{
		icon: '/icons/sass.png',
		name: 'SCSS',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/tailwind.png',
		name: 'Tailwind',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/jest.png',
		name: 'Jest',
		level: ESkillLevels.beginner,
	},
	{
		icon: '/icons/rtl.png',
		name: 'RTL',
		level: ESkillLevels.beginner,
	},
	{
		icon: '/icons/framer.svg',
		name: 'Framer Motion',
		level: ESkillLevels.beginner,
	},
	{
		icon: '/icons/threejs.svg',
		name: 'Three.js',
		level: ESkillLevels.beginner,
		size: 40,
		bg: 'dark:bg-white rounded-full',
	},
]

export const toolsData: ISkill[] = [
	{
		icon: '/icons/git.png',
		name: 'GIT',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/npm.png',
		name: 'npm',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/figma.png',
		name: 'Figma',
		level: ESkillLevels.intermediate,
	},
	{
		icon: '/icons/adobeps.png',
		name: 'Photoshop',
		level: ESkillLevels.intermediate,
	},
]
