'use client'
import { useSearchParams } from 'next/navigation'
import { FC, useEffect, useState } from 'react'

const ContactModal: FC = () => {
	const params = useSearchParams()
	const [isVisible, setIsVisible] = useState<string | null>('false')

	useEffect(() => {
		setIsVisible(params.get('modal'))
	}, [params])

	return isVisible === 'true' ? (
		<section
			className={
				'fixed inset-0 bg-white bg-opacity-5 backdrop-blur-sm z-50 px-60 py-20'
			}
		>
			<div className='w-full h-full bg-dark-bg rounded-xl flex p-12'>
				<h1 className='text-2xl'>{"Let's talk"}</h1>
			</div>
		</section>
	) : null
}

export default ContactModal
