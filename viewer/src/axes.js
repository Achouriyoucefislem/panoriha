import React, { useRef } from "react";

function Spheres({ item }) {

    return (
      <>
        <a-cylinder
          color="red"
          height="200"
          radius="2"
          position={`${item.x} ${item.y} ${item.z}`}
          rotation="0 0 90"
        ></a-cylinder>
        <a-cylinder
          color="green"
          height="200"
          radius="2"
          position={`${item.x} ${item.y} ${item.z}`}
          rotation="90 0 0"
        ></a-cylinder>
        <a-cylinder
          color="blue"
          height="200"
          radius="2"
          position={`${item.x} ${item.y} ${item.z}`}
          rotation="0 90 0"
        ></a-cylinder>
      </>
    );
    
}

export default Spheres;