'use client'
import { motion } from 'framer-motion'
import { Dispatch, FC, SetStateAction } from 'react'
import { skillsBtnVariants, skillsBtnsVariants } from '../framer/skills.variant'
import { ISwitchButton, SwitchOptions } from '../types/ISwitchButton'

interface ISwitchButtonsProps {
	selected: SwitchOptions
	setSelected: Dispatch<SetStateAction<SwitchOptions>>
}

const SwitchButtons: FC<ISwitchButtonsProps> = ({ selected, setSelected }) => {
	const btns: ISwitchButton[] = [
		{ name: 'Tech Stack', enum: SwitchOptions.stack },
		{ name: 'Tools', enum: SwitchOptions.tools },
	]

	return (
		<motion.div
			variants={skillsBtnsVariants}
			initial='hidden'
			animate='show'
			className='mt-6'
		>
			{btns.map(btn => (
				<motion.button
					variants={skillsBtnVariants}
					onClick={() => setSelected(btn.enum)}
					className={`px-4 py-3 text-sm dark:text-gray-400 text-gray-500 transition dark:bg-opacity-40 bg-opacity-10 rounded-md ${
						selected === btn.enum
							? 'bg-purple-900 dark:text-violet-500 text-violet-500'
							: 'hover:text-gray-700 dark:hover:text-white'
					}`}
					key={btn.name}
				>
					{btn.name}
				</motion.button>
			))}
		</motion.div>
	)
}

export default SwitchButtons
