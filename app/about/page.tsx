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
		<main className='flex items-center'>
			<motion.article
				variants={aboutDivVariants}
				initial='hidden'
				animate='show'
				className='dark:bg-sub-dark-bg rounded-3xl bg-sub-light-bg dark:border-zinc-700 border-gray-200 border-2 p-12 mb-10'
			>
				<motion.header
					variants={aboutHeadingVariants}
					className='flex items-center gap-4'
				>
					<h1 className='text-2xl font-semibold'>About Me</h1>
					<div className='w-80 h-0.5 rounded-md bg-violet-500' />
				</motion.header>
				<section className='flex justify-between mt-8 items-center	'>
					<motion.div variants={aboutImgVariants} className='w-1/3 mr-24 ml-12'>
						<Image
							src='https://i.pinimg.com/474x/8d/88/44/8d88444e21011e2901cc12dd377e3211.jpg'
							alt='Markiian Berehovskyi | Image'
							width='350'
							height='350'
							className='rounded-full'
						/>
					</motion.div>

					<motion.div
						variants={aboutTextVariants}
						initial='hidden'
						animate='show'
						className='text-lg font-light indent-8 w-2/3'
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
