import { Sphere } from '@react-three/drei'
import { Vector3 } from '@react-three/fiber'
import { FC } from 'react'

interface Props {
	position: Vector3
	color: string
}

const Sphere3D: FC<Props> = ({ color, position }) => {
	return (
		<Sphere position={position} args={[0.1, 10, 10]}>
			<meshStandardMaterial
				color={color}
				emissive={color}
				emissiveIntensity={0.5}
				roughness={0.5}
			/>
		</Sphere>
	)
}

export default Sphere3D
