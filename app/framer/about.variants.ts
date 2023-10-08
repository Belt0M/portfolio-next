import { Variants } from 'framer-motion'

export const aboutDivVariants: Variants = {
	hidden: { opacity: 0, x: 50 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
}

export const aboutHeadingVariants: Variants = {
	hidden: { x: -100, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.9,
			duration: 0.25,
		},
	},
}

export const aboutImgVariants: Variants = {
	hidden: { y: 100, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 1,
			duration: 0.5,
		},
	},
}

export const aboutTextVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.9,
			delay: 0.9,
		},
	},
}

export const aboutPVariants: Variants = {
	hidden: { x: 100, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
}
