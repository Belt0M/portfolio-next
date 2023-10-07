'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { navbarItems } from '../data/navbar.data'
import { navbarLiVariants, navbarUlVariants } from '../framer/navbar.variants'

const Footer: FC = () => {
	const activeStyles =
		'text-gray-800 dark:text-white  before:w-full before:h-1 before:bg-purple-600 before:absolute before:-bottom-2 relative before:rounded-md'

	const currentPath = usePathname()

	return (
		<footer className='fixed bottom-0 w-full flex items-center justify-center pt-2 pb-3 border-t-2 border-gray-500 border-opacity-40 bg-dark-bg md:hidden'>
			<motion.ul
				variants={navbarUlVariants}
				initial='hidden'
				animate='show'
				className='flex list-none'
			>
				{navbarItems.map((item, index) => (
					<motion.li
						key={item.name}
						className='p-4 px-6 dark:text-gray-400 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-all text-[.9rem] font-semibold'
						variants={navbarLiVariants}
					>
						<Link
							href={item.path}
							className={currentPath === item.path ? activeStyles : ''}
						>
							{item.name}
						</Link>
					</motion.li>
				))}
			</motion.ul>
		</footer>
	)
}

export default Footer
