import { useFrame } from '@react-three/fiber'
import { FC, useRef } from 'react'
import { Group, Object3DEventMap } from 'three'
import { spheresInner, spheresOuter } from '../data/modal-spheres.data'
import Sphere3D from './Sphere3D'

const SphereGroup3D: FC = () => {
	const ref = useRef<Group<Object3DEventMap>>(null)
	useFrame(({ clock }) => {
		ref.current!.rotation.z = clock.getElapsedTime() * 0.05
	})

	return (
		<group ref={ref}>
			{spheresInner.map(point => (
				<Sphere3D
					key={point.index}
					position={point.position}
					color={point.color}
				/>
			))}
			{spheresOuter.map(point => (
				<Sphere3D
					key={point.index}
					position={point.position}
					color={point.color}
				/>
			))}
		</group>
	)
}

export default SphereGroup3D
