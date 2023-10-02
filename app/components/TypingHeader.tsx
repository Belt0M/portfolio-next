'use client'
import { FC } from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingHeader: FC = () => {
	return (
		<h2 className='text-2xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500  to-sky-600 my-3'>
			<TypeAnimation
				sequence={['Frontend Developer', 1000, 'Informatics Student', 1000]}
				speed={50}
				repeat={Infinity}
			/>
		</h2>
	)
}

export default TypingHeader
