'use client'
import { motion } from 'framer-motion'
import { NextPage } from 'next'
import { useState } from 'react'
import SkillItem from '../components/SkillItem'
import SwitchButtons from '../components/SwitchButtons'
import { skillsData, toolsData } from '../data/skills'
import {
	skillsHeadingVariants,
	skillsItemVariants,
	skillsItemsVariants,
} from '../framer/skills.variant'
import { SwitchOptions } from '../types/ISwitchButton'

const SkillsPage: NextPage = () => {
	const [selected, setSelected] = useState<SwitchOptions>(SwitchOptions.stack)

	return (
		<main className='md:pb-0 pb-32'>
			<article className='md:px-10 mx-2 pt-6'>
				<motion.header
					variants={skillsHeadingVariants}
					initial='hidden'
					animate='show'
					className='flex gap-3 items-center'
				>
					<div className='h-0.5 w-20 bg-violet-500' />
					<h1 className='text-2xl font-semibold'>Skills</h1>
				</motion.header>
				<SwitchButtons selected={selected} setSelected={setSelected} />
				<motion.section
					variants={skillsItemsVariants}
					initial='hidden'
					animate='show'
					className='mt-6 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-8 md:gap-y-12 gap-4 justify-items-center'
				>
					{selected === SwitchOptions.stack
						? skillsData.map(skill => (
								<motion.div
									variants={skillsItemVariants}
									key={skill.name}
									className='group flex items-center md:w-60 sm:w-60 xs:w-52 w-[100%] scale-90 h-20 border-2 rounded-md border-violet-500 md:py-4 py-0 md:px-2 px-3 hover:bg-violet-500 hover:bg-opacity-10 transition cursor-pointer md:gap-2 sm:gap-6 gap-3'
								>
									<SkillItem skill={skill} />
								</motion.div>
						  ))
						: toolsData.map(tool => <SkillItem skill={tool} key={tool.name} />)}
				</motion.section>
			</article>
		</main>
	)
}

export default SkillsPage
