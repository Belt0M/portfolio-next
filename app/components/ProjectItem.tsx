import Image from 'next/image'
import { FC } from 'react'
import { IoMdOpen } from 'react-icons/io'
import { LuGithub } from 'react-icons/lu'
import { IProject } from '../types/IProject'

interface IProjectItemProps {
	project: IProject
}

const ProjectItem: FC<IProjectItemProps> = ({ project }) => {
	const colors: string[] = [
		'bg-stack-1',
		'bg-stack-2',
		'bg-stack-3',
		'bg-stack-4',
	]
	return (
		<div className='relative p-4 min-h-[27rem] bg-sub-dark-bg rounded-lg border-2 border-neutral-700'>
			<div className='relative h-52'>
				<Image
					src={project.img}
					alt={project.name}
					fill
					className='rounded-lg'
				/>
			</div>
			<div>
				<h1 className='text-center mt-3'>{project.name}</h1>
				<p className='mt-2 text-sm text-light-gray'>{project.desc}</p>
				<div className='flex flex-wrap mt-6 pb-5'>
					{project.stack.map((el, index) => {
						const bgColor = colors[index % colors.length]
						return (
							<span
								key={index}
								className={
									bgColor +
									' py-2 px-3 rounded-md font-semibold mr-2 text-sm bg-opacity-30 mb-2 text-gray-300 hover:bg-opacity-40 transition cursor-pointer'
								}
							>
								{el}
							</span>
						)
					})}
				</div>
				{project.links && (
					<div className='absolute bottom-4 right-6 flex justify-end gap-2 text-white'>
						<LuGithub className='hover:text-violet-500 transition cursor-pointer' />
						<IoMdOpen className='hover:text-pink-500 transition cursor-pointer' />
					</div>
				)}
			</div>
		</div>
	)
}

export default ProjectItem
