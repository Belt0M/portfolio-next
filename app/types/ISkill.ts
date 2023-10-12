export enum ESkillLevels {
	beginner = 'Beginner',
	intermediate = 'Intermediate',
	advanced = 'Advanced',
}

export interface ISkill {
	icon: string
	name: string
	level: ESkillLevels
	size?: number
	bg?: string
}
