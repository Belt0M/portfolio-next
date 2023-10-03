'use client'
import { Dispatch, FC, SetStateAction } from 'react'
import { ESortingItems, ISort } from '../types/ISort'

interface ISortingItems {
	sortingType: ESortingItems
	setSortingType: Dispatch<SetStateAction<ESortingItems>>
}

const SortingItems: FC<ISortingItems> = ({ sortingType, setSortingType }) => {
	const sortingItems: ISort[] = [
		{ name: ESortingItems.all },
		{ name: ESortingItems.latest },
	]

	return (
		<ul className='list-none flex items-center'>
			{sortingItems.map(item => (
				<li
					key={item.name}
					className={`p-2 uppercase text-sm hover:text-gray-400 transition cursor-pointer ${
						item.name === sortingType
							? 'text-violet-500 hover:text-violet-500'
							: 'text-gray-500'
					}`}
					onClick={() => setSortingType(item.name)}
				>
					{item.name}
				</li>
			))}
		</ul>
	)
}

export default SortingItems
