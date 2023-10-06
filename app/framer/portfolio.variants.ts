import { Variants } from 'framer-motion'

export const portfoliosHeadingVariants: Variants = {
	hidden: { x: -100, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.35,
			duration: 0.3,
		},
	},
}
