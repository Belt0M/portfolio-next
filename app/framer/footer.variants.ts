import { Variants } from 'framer-motion'

export const footerLiVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}

export const footerUlVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.3,
			duration: 0.1,
		},
	},
}
