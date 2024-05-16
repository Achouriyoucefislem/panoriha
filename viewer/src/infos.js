import React from "react";

function infos({ coords, handler }) {
  let infos = coords.map((item) => {
    return (
      <>
        <a-entity
          onClick={() => handler(item)}
          id={item.id}
          position={`${item.px * 0.9} ${item.py * 0.9} ${item.pz * 0.9}`}
          rotation={`${item.prx} ${item.px <= 0 ? item.pry : item.pry + 180} ${
            item.prz
          }`}
          geometry={`primitive: plane; width:${item.width} ; height:${item.height}`}
          material="shader:flat;color: black; opacity: 0.5"
          text={`align:center; value: ${item.value}; width: 500; height: 500; color:white; zOffset: 5; side:double`}
        ></a-entity>
      </>
    );
  })

  return <>{infos}</>;
}

export default infos;