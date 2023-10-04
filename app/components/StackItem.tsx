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
				' py-2 px-3 rounded-md font-semibold mr-2 text-sm bg-opacity-30 mb-2 text-gray-300 hover:bg-opacity-40 transition cursor-pointer'
			}
		>
			{skill}
		</span>
	)
}

export default StackItem
