'use client'
import { NextPage } from 'next'
import { useState } from 'react'
import { BsFiletypeHtml } from 'react-icons/bs'
import SkillItem from '../components/SkillItem'
import SwitchButtons from '../components/SwitchButtons'
import { SwitchOptions } from '../types/ISwitchButton'
import { skillsData, toolsData } from '../data/skills'

const SkillsPage: NextPage = () => {
	const [selected, setSelected] = useState<SwitchOptions>(SwitchOptions.stack)

	return (
		<main>
			<article className='px-10 pt-6'>
				<header className='flex gap-3 items-center'>
					<div className='h-0.5 w-20 bg-violet-500' />
					<h1 className='text-2xl font-semibold'>Skills</h1>
				</header>
				<SwitchButtons selected={selected} setSelected={setSelected} />
				<section className='mt-6'>
					{selected === SwitchOptions.stack ? skillsData.map(skill => <SkillItem skill={skill} key={skill.name}/>) : toolsData.map(tool => <SkillItem skill={tool} key={tool.name}/>)}
				</section>
			</article>
		</main>
	)
}

export default SkillsPage
