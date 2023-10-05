import { Variants } from 'framer-motion'

export const homeImgVariants: Variants = {
	hidden: { x: '70%', opacity: 0 },
	show: {
		x: '0%',
		opacity: 1,
		transition: {
			delay: 0.35,
			duration: 0.5,
		},
	},
}

export const homePVariants: Variants = {
	hidden: { y: 50, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.3,
		},
	},
}

export const homeH1Variants: Variants = {
	hidden: { x: -50, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.4,
			duration: 0.3,
		},
	},
}

export const homeH5Variants: Variants = {
	hidden: { y: -50, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.3,
		},
	},
}

export const homeTypingVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 0.4,
			duration: 0.3,
		},
	},
}
