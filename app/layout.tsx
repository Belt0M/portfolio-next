import type { Metadata } from 'next'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Poppins } from 'next/font/google'
import ContactButton from './components/ContactButton'
import ContactModal from './components/ContactModal'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const poppins = Poppins({
	weight: ['100', '300', '500', '600', '700', '800'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Markiian Berehovskyi | Portfolio',
	description:
		'Markiian Berehovskyi personal website, with skills list and latest projects examples',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Navbar />
				{children}
				<ContactButton />
				<ContactModal />
				<Footer />
				<Analytics />
			</body>
		</html>
	)
}
