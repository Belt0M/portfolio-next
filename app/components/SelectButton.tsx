import { clsx } from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
	btn: string
	activeBtn: string
	setActiveBtn: Dispatch<SetStateAction<string>>
}

const SelectButton: FC<Props> = ({ btn, activeBtn, setActiveBtn }) => {
	const activeStyle = 'text-zinc-400 border-zinc-400'
	const style = clsx(
		activeBtn === btn && activeStyle,
		'px-4 py-2 border-2 border-dark-gray text-xs hover:border-dark-gray-hover hover:text-dark-gray-hover transition-all'
	)
	return (
		<button className={style} onClick={() => setActiveBtn(btn)}>
			{btn}
		</button>
	)
}

export default SelectButton
