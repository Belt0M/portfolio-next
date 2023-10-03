'use client'
import { NextPage } from 'next'
import { useState } from 'react'
import SortingItems from '../components/SortingItems'
import { ESortingItems } from '../types/ISort'

const PortfolioPage: NextPage = () => {
	const [sortingType, setSortingType] = useState<ESortingItems>(
		ESortingItems.all
	)

	return (
		<main>
			<section className='flex items-center justify-between pt-6 px-2'>
				<h1 className='text-lg'>Projects</h1>
				<SortingItems
					sortingType={sortingType}
					setSortingType={setSortingType}
				/>
			</section>
		</main>
	)
}

export default PortfolioPage
