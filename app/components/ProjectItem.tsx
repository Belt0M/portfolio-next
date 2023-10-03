import Image from 'next/image'
import { FC } from 'react'
import { IProject } from '../types/IProject'

interface IProjectItemProps {
	project: IProject
}

const ProjectItem: FC<IProjectItemProps> = ({ project }) => {
	return (
		<div className='p-4 h-96 bg-sub-dark-bg rounded-lg border-2 border-neutral-700'>
			<div className='relative h-52'>
				<Image src={project.img} alt={project.name} fill />
			</div>
			<div>
				<h1>{project.name}</h1>
				<p>{project.desc}</p>
				<div>
					{project.stack.map((el, index) => (
						<span key={index}>{el}</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProjectItem
