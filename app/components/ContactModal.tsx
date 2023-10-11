'use client'
import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { btnsArr } from '../data/contact.data'
import { modalWindowVariants } from '../framer/modal.variants'
import ModalInput from './ModalInput'
import ModalSubmit from './ModalSubmit'
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

	const changeParams = () => router.push(`${pathname}?modal=false`)

	const onOutsideClick = (event: React.MouseEvent) => {
		let el = event.target as HTMLElement
		if (event.target && el === el.closest('section')) {
			changeParams()
		}
	}

	return isVisible === 'true' ? (
		<section
			className={
				'fixed inset-0 dark:bg-white bg-black dark:bg-opacity-5 bg-opacity-10 backdrop-blur-sm z-50 xl:px-60 xl:py-20 md:p-20 sm:p-10 p-0'
			}
			onClick={(event: React.MouseEvent) => onOutsideClick(event)}
		>
			<motion.div
				variants={modalWindowVariants}
				initial='hidden'
				animate='show'
				className=' relative flex items-center justify-between gap-8 w-full h-full dark:bg-dark-bg bg-light-bg sm:rounded-xl p-8 md:flex-row flex-col'
			>
				<AiOutlineClose
					className='absolute sm:top-3 sm:right-3 top-4 right-4 text-zinc-400 sm:text-base text-xl cursor-pointer hover:scale-110 dark:hover:text-white hover:text-black transition duration-300 z-50'
					onClick={() => changeParams()}
				/>
				<div className='flex items-center justify-center md:w-1/2 w-full md:h-full h-1/4 md:mt-0 mt-2'>
					<h1 className='text-4xl text-center'>{"Let's talk"}</h1>
				</div>
				<div className='md:w-[45%] w-full h-[80%] md:h-full dark:bg-[#010001] bg-sub-light-bg shadow-dark-center sm:p-12 p-8 dark:text-dark-gray text-zinc-400 text-sm'>
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
					<ModalSubmit text='Send a request' />
				</div>
			</motion.div>
		</section>
	) : null
}

export default ContactModal
