'use client'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import TypingHeader from './components/TypingHeader'
import {
	homeH1Variants,
	homeH5Variants,
	homeImgVariants,
	homePVariants,
} from './framer/home.variants'

const Home: NextPage = () => {
	return (
		<main className='flex items-center justify-center md:flex-row flex-col-reverse'>
			<div className='h-[15rem] w-4/5 md:w-1/3 md:mr-20 text-center md:text-left'>
				<motion.h5
					variants={homeH5Variants}
					initial='hidden'
					animate='show'
					className='text-violet-500 text-base'
				>
					{"Hello World, I'm"}
				</motion.h5>
				<motion.h1
					variants={homeH1Variants}
					initial='hidden'
					animate='show'
					className='md:text-4xl font-bold mt-1 text-3xl'
				>
					Markiian Berehovskyi
				</motion.h1>
				<TypingHeader />
				<motion.p variants={homePVariants} initial='hidden' animate='show'>
					Welcome to My personal website.👋🏼
				</motion.p>
			</div>
			<motion.div variants={homeImgVariants} initial='hidden' animate='show'>
				<Image
					alt='Markiian Berehovskyi | Image'
					src='https://i.pinimg.com/474x/8d/88/44/8d88444e21011e2901cc12dd377e3211.jpg'
					width='425'
					height='425'
					className='img rounded-full border-4 border-violet-500 shadow-lg-center md:mb-10 mb-4 scale-90 md:scale-100'
				/>
			</motion.div>
		</main>
	)
}

export default Home
