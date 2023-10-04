'use client'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import SortingItems from '../components/SortingItems'
import { projectsData } from '../data/projects'
import { IProject } from '../types/IProject'
import { ESortingItems } from '../types/ISort'

const PortfolioPage: NextPage = () => {
	const [sortingType, setSortingType] = useState<ESortingItems>(
		ESortingItems.all
	)
	const [projects, setProjects] = useState<IProject[]>(projectsData)

	useEffect(() => {
		if (sortingType === ESortingItems.latest) {
			const sorted = projects.sort((a, b) =>
				a.date > b.date ? 1 : a.date < b.date ? -1 : 0
			)
			setProjects(sorted)
		}
	}, [sortingType, projects])

	return (
		<main>
			<section className='pb-16'>
				<div className='flex items-center justify-between pt-6 px-2'>
					<div className='flex items-center gap-3'>
						<h1 className='text-2xl font-semibold'>Projects</h1>
						<div className='h-0.5 w-60 bg-violet-500' />
					</div>
					<SortingItems
						sortingType={sortingType}
						setSortingType={setSortingType}
					/>
				</div>
				<div className='grid grid-cols-3 gap-4 p-2 mt-4'>
					{projects.map((project, index) => (
						<ProjectItem project={project} key={index} />
					))}
				</div>
			</section>
		</main>
	)
}

export default PortfolioPage
