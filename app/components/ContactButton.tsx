'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'
import { BiSolidContact } from 'react-icons/bi'
import { modalBtnVariants } from '../framer/modal.variants'

const ContactButton: FC = () => {
	return (
		<motion.div
			variants={modalBtnVariants}
			animate='show'
			initial='hidden'
			className='fixed right-6 md:bottom-6 bottom-[6.25rem] bg-gradient-to-r from-purple-500  to-sky-600 rounded-full w-16 h-16 grid place-items-center hover:scale-110 hover:shadow-lg-center cursor-pointer transition z-10'
		>
			<Link
				href={`?modal=true`}
				className=' w-[3.7rem] h-[3.7rem] rounded-full grid place-items-center dark:bg-dark-bg dark:brightness-200 bg-gray-200 dark:hover:bg-sub-dark-bg'
			>
				<BiSolidContact className='dark:text-white text-violet-800 text-2xl scale-105 mr-0.5' />
			</Link>
		</motion.div>
	)
}

export default ContactButton
