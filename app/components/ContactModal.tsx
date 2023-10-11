'use client'
import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { btnsArr } from '../data/contact.data'
import { modalWindowVariants } from '../framer/modal.variants'
import ModalInput from './ModalInput'
import ModalTextarea from './ModalTextarea'
import SelectButton from './SelectButton'

const ContactModal: FC = () => {
	const params = useSearchParams()
	const [isVisible, setIsVisible] = useState<string | null>('false')
	const [formData, setFormData] = useState(null)
	const [activeBtn, setActiveBtn] = useState<string>(btnsArr[0])
	const router = useRouter()
	const pathname = usePathname()

	useEffect(() => {
		setIsVisible(params.get('modal'))
	}, [params])

	const onOutsideClick = (event: React.MouseEvent) => {
		let el = event.target as HTMLElement
		if (event.target && el === el.closest('section')) {
			router.push(`${pathname}?modal=false`)
		}
	}

	return isVisible === 'true' ? (
		<section
			className={
				'fixed inset-0 bg-white bg-opacity-5 backdrop-blur-sm z-50 px-60 py-20'
			}
			onClick={(event: React.MouseEvent) => onOutsideClick(event)}
		>
			<motion.div
				variants={modalWindowVariants}
				initial='hidden'
				animate='show'
				className='flex items-center justify-between gap-8 w-full h-full bg-dark-bg rounded-xl p-8'
			>
				<div className='w-1/2 '>
					<h1 className='text-4xl text-center'>{"Let's talk"}</h1>
				</div>
				<div className='w-[45%] h-full bg-[#010001] p-12 text-dark-gray text-sm'>
					<h3 className='mb-3 text-dark-gray-hover'>
						{"I'm interested in..."}
					</h3>
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
					<ModalInput placeholder='Your name' type='text' />
					<ModalInput placeholder='Your email' type='email' />
					<ModalTextarea placeholder='Your message' />
					<button className='bg-white rounded-sm text-black font-semibold py-2 px-2.5 hover:bg-transparent hover:border-violet-400 hover:text-violet-400 border-[.15rem] border-white transition duration-300 mt-6 text-[.8rem] ml-[.1rem]'>
						Send a request
					</button>
				</div>
			</motion.div>
		</section>
	) : null
}

export default ContactModal
