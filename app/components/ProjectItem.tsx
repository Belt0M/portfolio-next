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
	const { name, desc, img, stack, links } = project

	return (
		<>
			<div className='relative h-52'>
				<Image
					src={img}
					alt={name}
					fill
					className='rounded-lg'
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div>
				<h1 className='text-center mt-3 text-gray-700 dark:text-white'>
					{name}
				</h1>
				<p className='mt-2 h-16	overflow-y-scroll text-sm dark:text-light-gray text-gray-500'>
					{desc}
				</p>
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
		</>
	)
}

export default ProjectItem
