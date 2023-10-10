import { Variants } from 'framer-motion'

export const modalBtnVariants: Variants = {
	hidden: { transform: 'translateY(-5rem)', opacity: 0 },
	show: {
		transform: 'translateY(0rem)',
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: 1.4,
			type: 'spring',
			bounce: 0.5,
		},
	},
}

export const modalWindowVariants: Variants = {
	hidden: { transform: 'translateX(10rem)', opacity: 0 },
	show: {
		transform: 'translateX(0rem)',
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
}
