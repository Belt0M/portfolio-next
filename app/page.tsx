import { NextPage } from 'next'
import Image from 'next/image'
import TypingHeader from './components/TypingHeader'

const Home: NextPage = () => {
	return (
		<main className='flex items-center justify-center'>
			<div className='h-[15rem] mr-20'>
				<p className='text-violet-500'>{"Hello World, I'm"}</p>
				<h1 className='text-4xl font-bold mt-1'>Markiian Berehovskyi</h1>
				<TypingHeader />
				<p>Welcome to My personal website.👋🏼</p>
			</div>
			<Image
				alt='Markiian Berehovskyi | Image'
				src='https://i.pinimg.com/474x/8d/88/44/8d88444e21011e2901cc12dd377e3211.jpg'
				width='425'
				height='425'
				className='rounded-full border-4 border-violet-500 shadow-lg-center mb-10'
			/>
		</main>
	)
}

export default Home
