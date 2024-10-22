import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Macbook from "../Macbook/Macbook";
import "./CanvasMac.scss";

const CanvasMac = () => {
  return (
    <div className="canvasMac" role="canvasMac">
      <Canvas
        orthographic
        camera={{
          position: [2, 2, 4],
          left: -2,
          right: 2,
          top: 2,
          bottom: -2,
          zoom: 120,
        }}
      >
        <directionalLight position={[4, 2, 2]} intensity={25} />
        <Suspense fallback={null}>
          <Macbook />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasMac;
