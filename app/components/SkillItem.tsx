import { FC } from 'react'
import { ISkill } from '../types/ISkill'

interface ISkillItemProps {
	skill: ISkill
}

const SkillItem: FC<ISkillItemProps> = ({ skill }) => {
	return (
		<div className='group flex items-center w-64 h-20 border-2 rounded-md border-violet-500 py-4 px-6 hover:bg-violet-500 hover:bg-opacity-10 transition cursor-pointer'>
			<span className='text-2xl group-hover:text-4xl transition-all duration-300 w-1/3 group-hover:origin-center'>
				{skill.icon}
			</span>
			<div className='w-2/3'>
				<h2 className='text-lg top-3 relative group-hover:-translate-y-3 transition-all duration-200'>
					{skill.name}
				</h2>
				<p className='opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-500 text-violet-500 text-sm group-hover:-translate-y-1'>
					{skill.level}
				</p>
			</div>
		</div>
	)
}

export default SkillItem
