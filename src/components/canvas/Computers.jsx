import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { SectionWrapper } from "../../hoc";
import CanvasLoader from "../Loader";
const Computers = ({ isMobile }) => {
	const keyb = useGLTF("./stylized_keyboard/scene.gltf");
	const comps = useGLTF("./comps/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.9} groundColor="black" />
			<pointLight intensity={0.2} />
			<spotLight
				position={[-20, 80, 20]}
				angle={12}
				penumbra={1}
				intensity={0.8}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={comps.scene}
				scale={isMobile ? 0.65 : 1}
				position={[0, -3, 0.4]}
				rotation={[0, -0.0, -0.0]}
			/>
			{/* <primitive
				object={keyb.scene}
				scale={isMobile ? 0.8 : 1.5}
				position={isMobile ? [0, -2.5, 0] : [0, -3.5, 0]}
				rotation={[0.8, 0, 0]}
			/> */}
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 700px)");
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};
		mediaQuery.addEventListener("change", handleMediaQueryChange);
		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 35 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enablePan={false}
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					autoRotateSpeed={4}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
