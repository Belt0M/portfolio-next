'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { navbarItems } from '../data/navbar.data'

const Navbar = () => {
	const currentPath = usePathname()
	const activeStyles =
		'text-white  before:w-full before:h-1 before:bg-purple-600 before:absolute before:-bottom-2 relative before:rounded-md'

	return (
		<div className='flex justify-between items-center bg-dark-bg bg-opacity-20 backdrop-blur-sm h-24 px-36'>
			<Link
				href={navbarItems[0].path}
				className='text-transparent font-bold text-lg bg-clip-text bg-gradient-to-r from-purple-500  to-sky-600 hover:animate-pulse'
			>
				markiianB();
			</Link>
			<ul className='flex list-none'>
				{navbarItems.map(item => (
					<li
						key={item.name}
						className='px-4 text-gray-400 hover:text-gray-300 transition-all text-[.9rem] font-semibold'
					>
						<Link
							href={item.path}
							className={currentPath === item.path ? activeStyles : ''}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
			<div className='w-28 flex justify-end text-3xl'>
				<a href='https://github.com/Belt0M' target='_blank'>
					<AiFillGithub className='hover:text-violet-600 transition-all' />
				</a>
				<a href='https://www.linkedin.com/in/beltom/' target='_blank'>
					<BsLinkedin className='mx-4 hover:text-blue-600 transition-all text-2xl mt-1' />
				</a>
			</div>
		</div>
	)
}

export default Navbar
