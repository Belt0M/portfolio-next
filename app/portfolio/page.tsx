'use client'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useState } from 'react'
import ProjectItem from '../components/ProjectItem'
import SortingItems from '../components/SortingItems'
import { projectsData } from '../data/projects'
import {
	portfolioItemVariants,
	portfolioItemsVariants,
	portfoliosHeadingVariants,
} from '../framer/portfolio.variants'
import { IProject } from '../types/IProject'
import { ESortingItems } from '../types/ISort'

const PortfolioPage: NextPage = () => {
	const [sortingType, setSortingType] = useState<ESortingItems>(
		ESortingItems.all
	)
	const [projects, setProjects] = useState<IProject[]>(projectsData)

	return (
		<main>
			<section className='pb-16'>
				<div className='flex items-center justify-between pt-6 px-2'>
					<motion.div
						variants={portfoliosHeadingVariants}
						initial='hidden'
						animate='show'
						className='flex items-center gap-3'
					>
						<h1 className='text-2xl font-semibold'>Projects</h1>
						<div className='h-0.5 w-60 bg-violet-500' />
					</motion.div>
					<SortingItems
						sortingType={sortingType}
						setSortingType={setSortingType}
						setProjects={setProjects}
					/>
				</div>
				<motion.div
					variants={portfolioItemsVariants}
					initial='hidden'
					animate='show'
					className='grid grid-cols-3 gap-4 p-2 mt-4'
				>
					{projects.map((project, index) => (
						<motion.div
							variants={portfolioItemVariants}
							key={index}
							className='relative p-4 min-h-[27rem] dark:bg-sub-dark-bg rounded-lg border-2 dark:border-neutral-700 shadow-md cursor-pointer before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-blue-400 before:transition-all before:duration-500
							hover:before:w-full hover:before:left-0 hover:before:bg-violet-500'
						>
							<ProjectItem project={project} />
						</motion.div>
					))}
				</motion.div>
			</section>
		</main>
	)
}

export default PortfolioPage
