import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex items-center justify-center'>
			<div className='h-[15rem] mr-20'>
				<p className='text-violet-500'>{"Hello World, I'm"}</p>
				<h1 className='text-4xl font-bold'>Markiian Berehovskyi</h1>
				<h2 className='text-2xl font-semibold'>Frontend Developer</h2>
				<p>Welcome to My personal website.👋🏼</p>
			</div>
			<Image
				alt='Markiian Berehovskyi | Image'
				src='https://i1.sndcdn.com/avatars-000214125831-5q6tdw-t500x500.jpg'
				width='425'
				height='425'
				className='rounded-full border-4 border-violet-500 shadow-lg-center mb-10'
			/>
		</main>
	)
}
