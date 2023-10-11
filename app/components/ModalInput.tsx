import { FC } from 'react'

type Props = {
	type: string
	placeholder: string
}

const ModalInput: FC<Props> = ({ type, placeholder }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className='w-full p-2 placeholder:text-dark-gray border-b-dark-gray border-t-0 border-l-0 border-r-0 border-2 bg-transparent mt-8 focus:outline-none focus:border-violet-400 placeholder:focus:text-violet-400 focus:text-violet-400 invalid:border-red-400 invalid:text-red-400 text-dark-gray-hover'
		/>
	)
}

export default ModalInput
