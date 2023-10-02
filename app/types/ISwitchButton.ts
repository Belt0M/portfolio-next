export enum SwitchOptions {
	stack = 'stack',
	tools = 'tools',
}

export interface ISwitchButton {
	name: string
	enum: SwitchOptions
}
