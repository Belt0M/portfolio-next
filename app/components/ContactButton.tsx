'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { BiSolidContact } from 'react-icons/bi'

const ContactButton: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const router = useRouter()
	const pathname = usePathname()
	useEffect(() => {
		router.push(pathname)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Link
			href={`?modal=${!isOpen}`}
			onClick={() => setIsOpen(prev => !prev)}
			className='fixed right-6 bottom-6 w-14 h-14 rounded-full grid place-items-center bg-dark-bg border-2 brightness-200 hover:bg-sub-dark-bg hover:scale-110 hover:shadow-lg-center cursor-pointer border-gray-600 transition z-[100]'
		>
			<BiSolidContact className='text-white text-xl scale-105 mr-0.5' />
		</Link>
	)
}

export default ContactButton
