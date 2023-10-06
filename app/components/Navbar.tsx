'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { navbarItems } from '../data/navbar.data'
import {
	navbarIconVariants,
	navbarIconsVariants,
	navbarLiVariants,
	navbarLogoVariants,
	navbarUlVariants,
} from '../framer/navbar.variants'
import { ETheme } from '../types/ETheme'

const Navbar = () => {
	const currentPath = usePathname()
	const ref = useRef<HTMLDivElement>(null)
	const activeStyles =
		'text-gray-800 dark:text-white  before:w-full before:h-1 before:bg-purple-600 before:absolute before:-bottom-2 relative before:rounded-md'

	const [theme, setTheme] = useState<ETheme>(ETheme.dark)

	useEffect(() => {
		const storageTheme = localStorage.getItem('theme')
		if (!storageTheme || storageTheme === ETheme.dark) {
			setTheme(ETheme.dark)
			document.body.classList.add('dark')
		} else {
			setTheme(storageTheme as ETheme)
			document.body.classList.remove('dark')
		}
	}, [])

	const handleThemeToggle = (toggledTheme: ETheme) => {
		setTheme(toggledTheme)
		localStorage.setItem('theme', toggledTheme)
		document.body.classList.toggle('dark')
		console.log(theme)
	}

	return (
		<div
			ref={ref}
			className='flex fixed top-0 right-0 left-0 z-50 justify-between items-center dark:bg-dark-bg bg-sub-light-bg dark:bg-opacity-70 shadow-sm backdrop-blur-sm h-24 px-36'
		>
			<motion.h1 variants={navbarLogoVariants} initial='hidden' animate='show'>
				<Link
					href={navbarItems[0].path}
					className='text-transparent font-bold text-lg bg-clip-text bg-gradient-to-r from-purple-500  to-sky-600 hover:animate-pulse'
				>
					markiianB();
				</Link>
			</motion.h1>
			<motion.ul
				variants={navbarUlVariants}
				initial='hidden'
				animate='show'
				className='flex list-none'
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
			<motion.div
				variants={navbarIconsVariants}
				initial='hidden'
				animate='show'
				className='w-28 flex justify-end text-3xl'
			>
				<motion.a
					variants={navbarIconVariants}
					href='https://github.com/Belt0M'
					target='_blank'
				>
					<AiFillGithub className='hover:text-violet-600 transition-all' />
				</motion.a>
				<motion.a
					variants={navbarIconVariants}
					href='https://www.linkedin.com/in/beltom/'
					target='_blank'
					className='mr-1'
				>
					<BsLinkedin className='mx-4 hover:text-blue-600 transition-all text-2xl mt-1' />
				</motion.a>
				<motion.div
					variants={navbarIconVariants}
					className='relative w-6 h-6 mt-1'
				>
					{theme === ETheme.dark ? (
						<Image
							src='/icons/dark.png'
							fill
							alt='Dark Mode'
							className='hover:scale-105 transition cursor-pointer'
							onClick={() => handleThemeToggle(ETheme.light)}
						/>
					) : (
						<Image
							src='/icons/light.png'
							fill
							alt='Light Mode'
							className='hover:scale-105 transition cursor-pointer'
							onClick={() => handleThemeToggle(ETheme.dark)}
						/>
					)}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Navbar
