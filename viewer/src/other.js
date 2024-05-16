import React, { useRef } from "react";

function Spheres({ coords, setVideo }) {
  let spheres = coords.map((item) => {
    return (
      <a-entity
        key={item.x}
        gltf-model="./info/scene.gltf"
        id={item.id}
        position={`${item.x * 0.9} ${item.y * 0.9} ${item.z * 0.9}`}
        rotation={`${item.rx} ${item.ry} ${item.rz}`}
        look-controls
        scale="5 5 5"
        onClick={() => {
          setVideo(true);
        }}
        animation={`property: scale; from: 5 5 5; to: 8 8 8 ; dur: 800; easing: linear; loop: true `}
      ></a-entity>
    );
  });

  return <>{spheres}</>;
}

export default Spheres;