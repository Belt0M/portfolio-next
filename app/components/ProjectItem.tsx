import Image from 'next/image'
import { FC } from 'react'
import { IoMdOpen } from 'react-icons/io'
import { LuGithub } from 'react-icons/lu'
import { IProject } from '../types/IProject'
import StackItem from './StackItem'

interface IProjectItemProps {
	project: IProject
}

const ProjectItem: FC<IProjectItemProps> = ({ project }) => {
	const { name, desc, img, stack, links, date } = project

	return (
		<div
			className='relative p-4 min-h-[27rem] bg-sub-dark-bg rounded-lg border-2 border-neutral-700 cursor-pointer before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
			hover:before:w-full hover:before:left-0 hover:before:bg-violet-500'
		>
			<div className='relative h-52'>
				<Image src={img} alt={name} fill className='rounded-lg' />
			</div>
			<div>
				<h1 className='text-center mt-3'>{date.toLocaleDateString()}</h1>
				<p className='mt-2 text-sm text-light-gray'>{desc}</p>
				<div className='flex flex-wrap mt-6 pb-5'>
					{stack.map((el, index) => (
						<StackItem key={index} skill={el} index={index} />
					))}
				</div>
				{links && (
					<div className='absolute bottom-4 right-6 flex justify-end gap-2 text-white'>
						<a href={links.git} target='_blank'>
							<LuGithub className='hover:text-violet-500 transition cursor-pointer' />
						</a>
						{links.website && (
							<a href={links.website} target='_blank'>
								<IoMdOpen className='hover:text-pink-500 transition cursor-pointer' />
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProjectItem
