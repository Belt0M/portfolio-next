import React, { FC } from 'react'

interface ISkillItemProps {
	icon: React.ReactNode
	name: string
	level: string
}

const SkillItem: FC<ISkillItemProps> = ({ icon, name, level }) => {
	return (
		<div className='group flex items-center w-64 h-20 border-2 rounded-md border-violet-500 py-4 px-6 hover:bg-violet-500 hover:bg-opacity-10 transition cursor-pointer'>
			<span className='text-2xl group-hover:text-4xl transition-all duration-300 w-1/3 group-hover:origin-center'>
				{icon}
			</span>
			<div className='w-2/3'>
				<h2 className='text-lg mt-1 top-3 relative group-hover:-translate-y-3.5 transition-all duration-200'>
					{name}
				</h2>
				<p className='opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-500 text-violet-500 text-sm group-hover:-translate-y-1'>
					{level}
				</p>
			</div>
		</div>
	)
}

export default SkillItem
