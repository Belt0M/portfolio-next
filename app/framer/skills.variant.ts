import { Variants } from 'framer-motion'

export const skillsHeadingVariants: Variants = {
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
export const skillsBtnsVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.35,
			delay: 0.4,
			duration: 0.5,
			delayChildren: 0.6,
		},
	},
}

export const skillsBtnVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
}

export const skillsItemsVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			delay: 0.5,
			delayChildren: 0.6,
			staggerChildren: 0.2,
			duration: 0.6,
		},
	},
}

export const skillsItemVariants: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}
