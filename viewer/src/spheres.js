import React, { useRef } from "react";

function Spheres({ coords, handler }) {

  let spheres = coords.map((item) => {
    return (
      <a-entity
        data-selected=''
        key={item.x}
        gltf-model="./direction_arrow/scene.gltf"
        id={item.id}
        position={`${item.x * 0.9} ${item.y * 0.9} ${item.z * 0.9}`}
        rotation={`${item.rx} ${item.ry} ${item.rz}`}
        look-controls
        onClick={() => {
          handler(item);
        }}
        scale={`${item.s} ${item.s} ${item.s}`}
        material='color: red'
      ></a-entity>
    );
  });

  return <>{spheres}</>;
}

export default Spheres;