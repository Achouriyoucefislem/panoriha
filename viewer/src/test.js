import React from 'react'
import aframe from 'aframe'

function test() {
  return (
    <a-scene>
      <a-sky src="http://localhost:5000/esi.jpg"></a-sky>
      <a-plane
        height={10}
        width={10}
        material="opacity:1;color:black;side:double"
        position="0 0 -10"
        rotation="90 0 0"
      ></a-plane>
    </a-scene>
  );
}

export default test