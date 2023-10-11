import { FC } from 'react'

type Props = {
	text: string
}

const ModalSubmit: FC<Props> = ({ text }) => {
	return (
		<button
			type='submit'
			className='dark:bg-white bg-sub-dark-bg rounded-sm dark:text-black text-white font-semibold py-2 px-2.5 hover:bg-transparent hover:border-violet-400 hover:text-violet-400 border-[.15rem] dark:border-white border-sub-dark-bg transition duration-300 mt-6 text-[.8rem] ml-[.1rem]'
		>
			{text}
		</button>
	)
}

export default ModalSubmit
