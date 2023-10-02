'use client'
import { Dispatch, FC, SetStateAction } from 'react'
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
		<div className='mt-6'>
			{btns.map(btn => (
				<button
					onClick={() => setSelected(btn.enum)}
					className={`px-4 py-3 text-sm text-gray-400 hover:text-white transition bg-opacity-40 rounded-md ${
						selected === btn.enum && 'bg-purple-900 text-violet-500'
					}`}
					key={btn.name}
				>
					{btn.name}
				</button>
			))}
		</div>
	)
}

export default SwitchButtons
