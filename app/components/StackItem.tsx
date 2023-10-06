import { FC } from 'react'
import { colors } from '../data/stack-colors.data'

interface IStackItemProps {
	skill: string
	index: number
}

const StackItem: FC<IStackItemProps> = ({ skill, index }) => {
	const bgColor = colors[index % colors.length]
	return (
		<span
			key={index}
			className={
				bgColor +
				' py-2 px-3 rounded-md dark:font-semibold mr-2 text-sm dark:bg-opacity-30 bg-opacity-60 mb-2 dark:text-gray-300 text-gray-800 hover:bg-opacity-40 transition cursor-pointer'
			}
		>
			{skill}
		</span>
	)
}

export default StackItem
