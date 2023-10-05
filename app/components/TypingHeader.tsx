'use client'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { homeTypingVariants } from '../framer/home.variants'

const TypingHeader: FC = () => {
	return (
		<motion.h2
			variants={homeTypingVariants}
			initial='hidden'
			animate='show'
			className='text-2xl text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500  to-sky-600 my-3 h-8'
		>
			<TypeAnimation
				sequence={['Frontend Developer', 1000, 'Informatics Student', 1000]}
				speed={50}
				repeat={Infinity}
			/>
		</motion.h2>
	)
}

export default TypingHeader
