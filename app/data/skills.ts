import { AiFillHtml5 } from 'react-icons/ai'
import {
	BiLogoFigma,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoRedux,
	BiLogoSass,
	BiLogoTailwindCss,
	BiLogoTypescript,
} from 'react-icons/bi'
import { BsGit } from 'react-icons/bs'
import { DiNpm } from 'react-icons/di'
import { FaCss3Alt } from 'react-icons/fa'
import { GiOctopus } from 'react-icons/gi'
import { SiGreensock, SiJest } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { ESkillLevels, ISkill } from '../types/ISkill'

export const skillsData: ISkill[] = [
	{
		icon: AiFillHtml5,
		name: 'HTML',
		level: ESkillLevels.advanced,
	},
	{
		icon: FaCss3Alt,
		name: 'CSS',
		level: ESkillLevels.advanced,
	},
	{
		icon: BiLogoJavascript,
		name: 'JavaScript',
		level: ESkillLevels.advanced,
	},
	{
		icon: BiLogoTypescript,
		name: 'TypeScript',
		level: ESkillLevels.intermediate,
	},
	{
		icon: BiLogoReact,
		name: 'React',
		level: ESkillLevels.intermediate,
	},
	{
		icon: BiLogoRedux,
		name: 'Redux Toolkit',
		level: ESkillLevels.intermediate,
	},
	{
		icon: TbBrandNextjs,
		name: 'Next.js',
		level: ESkillLevels.intermediate,
	},
	{
		icon: BiLogoSass,
		name: 'SCSS',
		level: ESkillLevels.intermediate,
	},
	{
		icon: BiLogoTailwindCss,
		name: 'Tailwind',
		level: ESkillLevels.intermediate,
	},
	{
		icon: SiJest,
		name: 'Jest',
		level: ESkillLevels.beginner,
	},
	{
		icon: GiOctopus,
		name: 'RTL',
		level: ESkillLevels.beginner,
	},
	{
		icon: SiGreensock,
		name: 'GSAP',
		level: ESkillLevels.beginner,
	},
]

export const toolsData: ISkill[] = [
	{
		icon: BsGit,
		name: 'GIT',
		level: ESkillLevels.intermediate,
	},
	{
		icon: DiNpm,
		name: 'npm',
		level: ESkillLevels.intermediate,
	},
	{
		icon: BiLogoFigma,
		name: 'Figma',
		level: ESkillLevels.intermediate,
	},
]
