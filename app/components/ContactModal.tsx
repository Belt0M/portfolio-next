'use client'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { btnsArr } from '../data/contact.data'
import { modalWindowVariants } from '../framer/modal.variants'
import SelectButton from './SelectButton'

const ContactModal: FC = () => {
	const params = useSearchParams()
	const [isVisible, setIsVisible] = useState<string | null>('false')
	const [formData, setFormData] = useState(null)
	const [activeBtn, setActiveBtn] = useState<string>(btnsArr[0])

	useEffect(() => {
		setIsVisible(params.get('modal'))
	}, [params])

	return isVisible === 'true' ? (
		<section
			className={
				'fixed inset-0 bg-white bg-opacity-5 backdrop-blur-sm z-50 px-60 py-20'
			}
		>
			<motion.div
				variants={modalWindowVariants}
				initial='hidden'
				animate='show'
				className='flex items-center justify-between gap-8 w-full h-full bg-dark-bg rounded-xl p-8'
			>
				<div className='w-1/2 '>
					<h1 className='text-5xl text-center'>{"Let's talk"}</h1>
				</div>
				<div className='w-[45%] h-full bg-[#010001] p-12 text-dark-gray text-sm'>
					<h3 className='mb-3'>{"I'm interested in..."}</h3>
					<div className='flex flex-wrap gap-3'>
						{btnsArr.map(btn => (
							<SelectButton
								key={btn}
								btn={btn}
								activeBtn={activeBtn}
								setActiveBtn={setActiveBtn}
							/>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	) : null
}

export default ContactModal
