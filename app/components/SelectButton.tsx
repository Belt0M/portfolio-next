import { clsx } from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
	btn: string
	activeBtn: string
	setActiveBtn: Dispatch<SetStateAction<string>>
}

const SelectButton: FC<Props> = ({ btn, activeBtn, setActiveBtn }) => {
	const activeStyle = 'text-violet-400 border-violet-400 hover'
	const style = clsx(
		activeBtn === btn
			? activeStyle
			: 'hover:border-dark-gray-hover hover:text-dark-gray-hover',
		'px-4 py-2 border-2 border-dark-gray text-xs transition-all'
	)
	return (
		<button className={style} onClick={() => setActiveBtn(btn)}>
			{btn}
		</button>
	)
}

export default SelectButton
