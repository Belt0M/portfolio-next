import React from 'react'
export enum ESkillLevels {
	beginner = 'Beginner',
	intermediate = 'Intermediate',
	advanced = 'Advanced',
}

export interface ISkill {
	icon: React.ReactNode
	name: string
	level: ESkillLevels
}
