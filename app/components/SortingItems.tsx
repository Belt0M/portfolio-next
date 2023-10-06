'use client'
import { motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction } from 'react'
import { projectsData } from '../data/projects'
import {
	portfolioSortVariants,
	portfolioSortsVariants,
} from '../framer/portfolio.variants'
import { IProject } from '../types/IProject'
import { ESortingItems, ISort } from '../types/ISort'

interface ISortingItems {
	sortingType: ESortingItems
	setSortingType: Dispatch<SetStateAction<ESortingItems>>
	setProjects: Dispatch<SetStateAction<IProject[]>>
}

const SortingItems: FC<ISortingItems> = ({
	sortingType,
	setSortingType,
	setProjects,
}) => {
	const sortingItems: ISort[] = [
		{ name: ESortingItems.all },
		{ name: ESortingItems.latest },
	]

	const handleClick = (name: ESortingItems) => {
		setSortingType(name)
		if (name === ESortingItems.latest) {
			const sorted = [...projectsData].sort(
				(a, b) => Number(b.date) - Number(a.date)
			)
			setProjects(sorted.slice(0, 3))
		} else {
			setProjects(projectsData)
		}
	}

	return (
		<motion.ul
			variants={portfolioSortsVariants}
			initial='hidden'
			animate='show'
			className='list-none flex items-center'
		>
			{sortingItems.map(item => (
				<motion.li
					variants={portfolioSortVariants}
					key={item.name}
					className={`p-2 uppercase text-sm dark:hover:text-gray-400 transition cursor-pointer ${
						item.name === sortingType
							? 'text-violet-500 hover:text-violet-500'
							: 'text-gray-500 hover:text-gray-700 '
					}`}
					onClick={() => handleClick(item.name)}
				>
					{item.name}
				</motion.li>
			))}
		</motion.ul>
	)
}

export default SortingItems
