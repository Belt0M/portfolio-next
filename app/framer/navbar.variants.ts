import { Variants } from 'framer-motion'

export const navbarLiVariants: Variants = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

export const navbarUlVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
		},
	},
}

export const navbarLogoVariants: Variants = {
	hidden: {
		x: -50,
		opacity: 0,
	},
	show: {
		x: 0,
		opacity: 1,
	},
}

export const navbarIconVariants: Variants = {
	hidden: { x: 50, opacity: 0 },
	show: { x: 0, opacity: 1 },
}

export const navbarIconsVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
			delayChildren: 0.3,
		},
	},
}
