import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { navbarItems } from '../data/navbar.data'
import { navbarLiVariants, navbarUlVariants } from '../framer/navbar.variants'

const NavbarItems: FC = () => {
	const activeStyles =
		'text-gray-800 dark:text-white  before:w-full before:h-1 before:bg-purple-600 before:absolute before:-bottom-2 relative before:rounded-md'

	const currentPath = usePathname()

	return (
		<motion.ul
			variants={navbarUlVariants}
			initial='hidden'
			animate='show'
			className='hidden md:flex list-none'
		>
			{navbarItems.map((item, index) => (
				<motion.li
					key={item.name}
					className='px-4 dark:text-gray-400 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300 transition-all text-[.9rem] font-semibold'
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
	)
}

export default NavbarItems
