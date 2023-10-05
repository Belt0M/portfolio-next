import { Variants } from 'framer-motion'

export const aboutDivVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 0.4,
		},
	},
}

export const aboutHeadingVariants: Variants = {
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

export const aboutImgVariants: Variants = {
	hidden: { y: 100, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
}

export const aboutTextVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 1,
			delay: 0.5,
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
