'use client'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import Image from 'next/image'
import {
	aboutDivVariants,
	aboutHeadingVariants,
	aboutImgVariants,
	aboutPVariants,
	aboutTextVariants,
} from '../framer/about.variants'

const AboutPage: NextPage = () => {
	return (
		<main className='flex items-center md:pb-0 pb-16'>
			<motion.article
				variants={aboutDivVariants}
				initial='hidden'
				animate='show'
				className='dark:bg-sub-dark-bg md:rounded-3xl rounded-2xl bg-sub-light-bg dark:border-zinc-700 border-gray-200 dark:border-opacity-70 border-2 md:p-12 md:pb-20	p-6 mb-10'
			>
				<motion.header
					variants={aboutHeadingVariants}
					initial='hidden'
					animate='show'
					className='flex items-center md:gap-4 gap-3'
				>
					<h1 className='text-2xl font-semibold'>About Me</h1>
					<div className='md:w-80 w-28 h-0.5 rounded-md bg-violet-500' />
				</motion.header>
				<section className='flex justify-between md:mt-12 mt-6 items-center md:flex-row flex-col'>
					<motion.div
						variants={aboutImgVariants}
						initial='hidden'
						animate='show'
						className='md:w-1/3 w-4/5 md:mr-24 md:ml-12'
					>
						<Image
							src='https://i.pinimg.com/474x/8d/88/44/8d88444e21011e2901cc12dd377e3211.jpg'
							alt='Avatar Image'
							width='350'
							height='350'
							className='rounded-full'
						/>
					</motion.div>

					<motion.div
						variants={aboutTextVariants}
						initial='hidden'
						animate='show'
						className='font-light indent-8 md:w-2/3 text-s md:text-lg md:mt-0 mt-8'
					>
						<motion.p variants={aboutPVariants}>
							{
								"Hello there! My name is Markiian Berehovskyi. I'm a Frontend developer from Ukraine. I have 2 year of experience in frontend web development. I'm passionate about creating captivating digital experiences.I thrive on turning imaginative designs into seamless, user-friendly interfaces. With a keen eye for detail and a love for clean, efficient code, I take pride in crafting websites that not only look stunning but also deliver a smooth and intuitive user experience."
							}
						</motion.p>
						<motion.p variants={aboutPVariants} className='mt-6'>
							{
								"I'm constantly evolving with the ever-changing landscape of web technologies, always eager to embrace new challenges and push the boundaries of what's possible in the digital realm. Let's build something beautiful together!"
							}
						</motion.p>
					</motion.div>
				</section>
			</motion.article>
		</main>
	)
}

export default AboutPage
