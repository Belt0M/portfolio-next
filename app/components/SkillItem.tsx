import Image from 'next/image'
import { FC } from 'react'
import { ISkill } from '../types/ISkill'

interface ISkillItemProps {
	skill: ISkill
}

const SkillItem: FC<ISkillItemProps> = ({ skill }) => {
	const { icon, level, name, size, bg } = skill

	const imageSize = size ? size : 42

	return (
		<>
			<div className='w-1/3 grid place-items-center'>
				<div
					className={
						bg &&
						bg +
							' grid place-items-center sm:m-1 sm:dark:p-3 sm:dark:pl-4 sm:dark:pt-3.5 pl-1 aspect-square dark:bg-opacity-90'
					}
				>
					<Image
						src={icon}
						width={imageSize}
						height={imageSize}
						alt='Html'
						className='transition-all duration-300 origin-center group-hover:scale-125'
					/>
				</div>
			</div>
			<div className='w-2/3'>
				<h2 className='lg:text-lg sm:text-base text-[.8rem] relative w-full'>
					{name}
				</h2>
				<p className='h-0 opacity-0 group-hover:opacity-100 group-hover:h-4 group-hover:mt-1 transition-all duration-300 text-violet-500 md:text-sm group-hover:-translate-y-1 text-xs'>
					{level}
				</p>
			</div>
		</>
	)
}

export default SkillItem
