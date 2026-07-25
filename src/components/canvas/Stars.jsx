import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
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

	const ref = useRef();
	const sphere = random.inSphere(new Float32Array(30000), { radius: 0.8 });

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 10;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#57bfff"
					size={isMobile ? 0.0003 : 0.001}
					sizeAttenuation={isMobile ? false : true}
					depthWrite={isMobile ? true : false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[-1]">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
