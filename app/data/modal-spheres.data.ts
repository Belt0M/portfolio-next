import { Vector3 } from '@react-three/fiber'

const MIN_RADIUS: number = 7.5
const MAX_RADIUS: number = 15
const DEPTH: number = 2
const LEFT_COLOR: string = '7c28cb'
const RIGHT_COLOR: string = 'cb287f'
const NUM_POINTS: number = 2500

const getGradientStop = (ratio: number): string => {
	ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio

	const c0 = LEFT_COLOR.match(/.{1,2}/g)!.map(
		oct => parseInt(oct, 16) * (1 - ratio)
	)
	const c1 = RIGHT_COLOR.match(/.{1,2}/g)!.map(oct => parseInt(oct, 16) * ratio)
	const ci = [0, 1, 2].map(i => Math.min(Math.round(c0[i] + c1[i]), 255))
	const color = ci
		.reduce((a, v) => (a << 8) + v, 0)
		.toString(16)
		.padStart(6, '0')

	return `#${color}`
}

const calculateColor = (x: number): string => {
	const maxDiff = MAX_RADIUS * 2
	const distance = x + MAX_RADIUS

	const ratio = distance / maxDiff

	const stop = getGradientStop(ratio)
	return stop
}

const randomFromInterval = (min: number, max: number): number => {
	return Math.random() * (max - min) + min
}

export const spheresInner = Array.from(
	{ length: NUM_POINTS },
	(_, i) => i + 1
).map(num => {
	const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS)
	const randomAngle = Math.random() * Math.PI * 2

	const x = Math.cos(randomAngle) * randomRadius
	const y = Math.sin(randomAngle) * randomRadius
	const z = randomFromInterval(-DEPTH, DEPTH)

	const color = calculateColor(x)
	const position: Vector3 = [x, y, z]

	return {
		index: num,
		position,
		color,
	}
})

export const spheresOuter = Array.from(
	{ length: NUM_POINTS / 4 },
	(_, i) => i + 1
).map(num => {
	const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2)
	const randomAngle = Math.random() * Math.PI * 2

	const x = Math.cos(randomAngle) * randomRadius
	const y = Math.sin(randomAngle) * randomRadius
	const z = randomFromInterval(-DEPTH * 10, DEPTH * 10)

	const color = calculateColor(x)
	const position: Vector3 = [x, y, z]

	return {
		index: num,
		position,
		color,
	}
})
