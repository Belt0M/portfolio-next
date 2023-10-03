export interface IProject {
	img: string
	name: string
	desc: string
	stack: string[]
	links?: {
		git: string
		website?: string
	}
	date: Date
}
