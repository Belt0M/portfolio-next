'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { BiSolidContact } from 'react-icons/bi'
import { modalBtnVariants } from '../framer/modal.variants'

const ContactButton: FC = () => {
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		router.push(pathname)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<motion.div
			variants={modalBtnVariants}
			animate='show'
			initial='hidden'
			className='fixed right-6 bottom-6 bg-gradient-to-r from-purple-500  to-sky-600 rounded-full w-16 h-16 grid place-items-center hover:scale-110 hover:shadow-lg-center cursor-pointer transition z-10'
		>
			<Link
				href={`?modal=true`}
				className=' w-[3.7rem] h-[3.7rem] rounded-full grid place-items-center bg-dark-bg brightness-200 hover:bg-sub-dark-bg '
			>
				<BiSolidContact className='text-white text-xl scale-105 mr-0.5' />
			</Link>
		</motion.div>
	)
}

export default ContactButton
