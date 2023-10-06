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
		<main>
			<article className='px-10 pt-6'>
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
					className='mt-6 grid grid-cols-4 gap-8 gap-y-12'
				>
					{selected === SwitchOptions.stack
						? skillsData.map(skill => (
								<motion.div variants={skillsItemVariants} key={skill.name}>
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
