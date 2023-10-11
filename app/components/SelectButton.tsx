import { clsx } from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
	btn: string
	activeBtn: string
	setActiveBtn: Dispatch<SetStateAction<string>>
}

const SelectButton: FC<Props> = ({ btn, activeBtn, setActiveBtn }) => {
	const activeStyle =
		'dark:text-violet-400 dark:border-violet-400 text-violet-500 border-violet-500'
	const style = clsx(
		activeBtn === btn
			? activeStyle
			: 'hover:border-dark-gray-hover dark:hover:text-dark-gray-hover hover:text-black dark:border-dark-gray border-zinc-400',
		'px-4 py-2 border-2 text-xs transition-all'
	)
	return (
		<button className={style} onClick={() => setActiveBtn(btn)}>
			{btn}
		</button>
	)
}

export default SelectButton
