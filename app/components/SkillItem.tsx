import Image from 'next/image'
import { FC } from 'react'
import { ISkill } from '../types/ISkill'

interface ISkillItemProps {
	skill: ISkill
}

const SkillItem: FC<ISkillItemProps> = ({ skill }) => {
	const { icon, level, name, size } = skill

	const imageSize = size ? size : 42

	return (
		<div className='group flex items-center w-64 h-20 border-2 rounded-md border-violet-500 py-4 px-2 hover:bg-violet-500 hover:bg-opacity-10 transition cursor-pointer gap-2'>
			<div className='w-1/3 grid place-items-center'>
				<Image
					src={icon}
					width={imageSize}
					height={imageSize}
					alt='Html'
					className='transition-all duration-300 origin-center group-hover:scale-125'
				/>
			</div>
			<div className='w-2/3'>
				<h2 className='text-lg relative'>{name}</h2>
				<p className='h-0 opacity-0 group-hover:opacity-100 group-hover:h-4 group-hover:mt-1 transition-all duration-300 text-violet-500 text-sm group-hover:-translate-y-1'>
					{level}
				</p>
			</div>
		</div>
	)
}

export default SkillItem
