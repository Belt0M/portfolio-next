import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { IFormData } from '../types/IFormData'

type Props = {
	placeholder: string
	name: string
	setFormData: Dispatch<SetStateAction<IFormData>>
}

const ModalTextarea: FC<Props> = ({ placeholder, name, setFormData }) => {
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return (
		<textarea
			placeholder={placeholder}
			required={false}
			name={name}
			onChange={handleChange}
			className='w-full p-2 py-3 dark:placeholder:text-dark-gray dark:border-b-dark-gray placeholder:text-zinc-400 border-b-zinc-400 border-t-0 border-l-0 border-r-0 border-2 bg-transparent mt-8 placeholder:bottom-2 resize-none dark:bg-zinc-900 bg-zinc-100 rounded-md focus:outline-none focus:border-violet-400 placeholder:focus:text-violet-400 focus:text-violet-400 invalid:border-red-400 invalid:text-red-400 text-dark-gray-hover'
			rows={3}
		></textarea>
	)
}

export default ModalTextarea
