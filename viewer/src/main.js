import { useEffect, useState, useRef } from "react";
import Spheres from "./spheres";
import Infos from "./infos";
import Other from "./other";
import AFRAME from "aframe";
import models from "./scenesjson";
import Axes from './axes'

function Main() {
  let [current, setcurrent] = useState(null);
  let [video, setVideo] = useState(false);
  let [pos, setPos] = useState(false);
  let [axes, setAxes] = useState(false);
  let idtogo = useRef(null)

  let changes = useRef([]);
  let circle = useRef(null);
  let lastId = useRef(100);
  let id = useRef(null);
  let global = useRef(null);
  let firstclick = useRef(true);
  let finalSize = useRef(null);
  let selected = useRef(null);

  let xp = () => {
        id.current = requestAnimationFrame(xp);
        selected.current.setAttribute("rotation", {
          ...selected.current.getAttribute("rotation"),
          x: +selected.current.getAttribute("rotation").x + 0.2,
        });
  };

  let xm = () => {
    id.current = requestAnimationFrame(xm);
    selected.current.setAttribute("rotation", {
      ...selected.current.getAttribute("rotation"),
      x: +selected.current.getAttribute("rotation").x - 0.2,
    });
  };

  let yp = () => {
    id.current = requestAnimationFrame(yp);
    selected.current.setAttribute("rotation", {
      ...selected.current.getAttribute("rotation"),
      y: +selected.current.getAttribute("rotation").y + 0.2,
    });
  };

  let ym = () => {
    id.current = requestAnimationFrame(ym);
    selected.current.setAttribute("rotation", {
      ...selected.current.getAttribute("rotation"),
      y: +selected.current.getAttribute("rotation").y - 0.2,
    });
  };

  let zp = () => {
    id.current = requestAnimationFrame(zp);
    selected.current.setAttribute("rotation", {
      ...selected.current.getAttribute("rotation"),
      z: +selected.current.getAttribute("rotation").z + 0.2,
    });
  };

  let zm = () => {
    id.current = requestAnimationFrame(zm);
    selected.current.setAttribute("rotation", {
      ...selected.current.getAttribute("rotation"),
      z: +selected.current.getAttribute("rotation").z - 0.2,
    });
  };

  let xpp = () => {
    if (
      Math.sqrt(
        Math.abs(+pos.x) ** 2 + Math.abs(+pos.y) ** 2 + Math.abs(+pos.z) ** 2
      ) < 470 ||
      Math.sqrt(
        Math.abs(+pos.x) ** 2 + Math.abs(+pos.y) ** 2 + Math.abs(+pos.z) ** 2
      ) >
        Math.sqrt(
          Math.abs(+pos.x + 0.5) ** 2 +
            Math.abs(+pos.y) ** 2 +
            Math.abs(+pos.z) ** 2
        )
    ) {
      id.current = requestAnimationFrame(xpp);
      selected.current.setAttribute("position", {
        ...selected.current.getAttribute("position"),
        x: +selected.current.getAttribute("position").x + 0.5,
      });
      setPos((pos) => ({ ...pos, x: +pos.x + 0.5 }));
    }
  };

  let ypp = () => {
        if (
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) < 470 ||
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) >
            Math.sqrt(
              Math.abs(+pos.x) ** 2 +
                Math.abs(+pos.y + 0.5) ** 2 +
                Math.abs(+pos.z) ** 2
            )
        ) {
          id.current = requestAnimationFrame(ypp);
          selected.current.setAttribute("position", {
            ...selected.current.getAttribute("position"),
            y: +selected.current.getAttribute("position").y + 0.5,
          });
          setPos((pos) => ({ ...pos, y: +pos.y + 0.5 }));
        }
  };

  let zpp = () => {
        if (
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) < 470 ||
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) >
            Math.sqrt(
              Math.abs(+pos.x) ** 2 +
                Math.abs(+pos.y) ** 2 +
                Math.abs(+pos.z + 0.5) ** 2
            )
        ) {
          id.current = requestAnimationFrame(zpp);
          selected.current.setAttribute("position", {
            ...selected.current.getAttribute("position"),
            z: +selected.current.getAttribute("position").z + 0.5,
          });
          setPos((pos) => ({ ...pos, z: +pos.z + 0.5 }));
        }
  };

  let xmm = () => {
        if (
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) < 470 ||
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) >
            Math.sqrt(
              Math.abs(+pos.x - 0.5) ** 2 +
                Math.abs(+pos.y) ** 2 +
                Math.abs(+pos.z) ** 2
            )
        ) {
          id.current = requestAnimationFrame(xmm);
          selected.current.setAttribute("position", {
            ...selected.current.getAttribute("position"),
            x: +selected.current.getAttribute("position").x - 0.5,
          });
          setPos((pos) => ({ ...pos, x: +pos.x - 0.5 }));
        }
  };

  let ymm = () => {
        if (
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) < 470 ||
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) >
            Math.sqrt(
              Math.abs(+pos.x) ** 2 +
                Math.abs(+pos.y - 0.5) ** 2 +
                Math.abs(+pos.z) ** 2
            )
        ) {
          id.current = requestAnimationFrame(ymm);
          selected.current.setAttribute("position", {
            ...selected.current.getAttribute("position"),
            y: +selected.current.getAttribute("position").y - 0.5,
          });
          setPos((pos) => ({ ...pos, y: +pos.y - 0.5 }));
        }
  };

  let zmm = () => {
        if (
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) < 470 ||
          Math.sqrt(
            Math.abs(+pos.x) ** 2 +
              Math.abs(+pos.y) ** 2 +
              Math.abs(+pos.z) ** 2
          ) >
            Math.sqrt(
              Math.abs(+pos.x) ** 2 +
                Math.abs(+pos.y) ** 2 +
                Math.abs(+pos.z - 0.5) ** 2
            )
        ) {
          id.current = requestAnimationFrame(zmm);
          selected.current.setAttribute("position", {
            ...selected.current.getAttribute("position"),
            z: +selected.current.getAttribute("position").z - 0.5,
          });
          setPos((pos) => ({ ...pos, z: +pos.z - 0.5 }));
        }
  };

  let wp = () => {
    id.current = requestAnimationFrame(wp);
    selected.current.setAttribute("geometry", {
      ...selected.current.getAttribute("geometry"),
      width: +selected.current.getAttribute("geometry").width + 0.2,
    });
  };

  let wm = () => {
    id.current = requestAnimationFrame(wm);
    selected.current.setAttribute("geometry", {
      ...selected.current.getAttribute("geometry"),
      width: +selected.current.getAttribute("geometry").width - 0.2,
    });
  };

  let lp = () => {
    id.current = requestAnimationFrame(lp);
    selected.current.setAttribute("geometry", {
      ...selected.current.getAttribute("geometry"),
      height: +selected.current.getAttribute("geometry").height + 0.2,
    });
  };

  let lm = () => {
    id.current = requestAnimationFrame(lm);
    selected.current.setAttribute("geometry", {
      ...selected.current.getAttribute("geometry"),
      height: +selected.current.getAttribute("geometry").height - 0.2,
    });
  };

  let messagehandler = (event) => {
    switch (event.data.ana) {
      case "hideaxes": {
        setAxes(false)
        setPos(null)
        break
      }
      case "fetch": {
        global.current = models;
        setcurrent(global.current[0]);
        break;
      }
      case "add": {
        window.parent.postMessage( { message : 'displaygrid' } , '*' )
        break;
      }
      case "delete": {
        handledelete();
        circle.current = null;
        break;
      }
      case "reset": {
        circle.current = null
        setcurrent(global.current[event.data.message])
        break;
      }
      case "addtext": {
        if (circle.current) selected.current.removeAttribute("animation");
        circle.current = null;
        handletextadd();
        break
      }
      case "rotate": {
        switch (event.data.message) {
          case "xp": {
            xp();
            break;
          }
          case "xm": {
            xm();
            break;
          }
          case "yp": {
            yp();
            break;
          }
          case "ym": {
            ym();
            break;
          }
          case "zp": {
            zp();
            break;
          }
          case "zm": {
            zm();
            break;
          }
        }
        break;
      }
      case "move": {
        switch (event.data.message) {
          case "xp+": {
            xpp();
            break;
          }
          case "xp-": {
            xmm();
            break;
          }
          case "yp+": {
            ypp();
            break;
          }
          case "yp-": {
            ymm();
            break;
          }
          case "zp+": {
            zpp();
            break;
          }
          case "zp-": {
            zmm();
            break;
          }
        }
        break;
      }
      case "e": {
        cancelAnimationFrame(id.current);
        break;
      }
      case "scalearrow": {
        finalSize.current = +event.data.message;
        selected.current.setAttribute("scale", {
          x: +event.data.message,
          y: +event.data.message,
          z: +event.data.message,
        });
        selected.current.setAttribute(
          "animation",
          `property:scale; from:${+event.data.message} ${+event.data
            .message} ${+event.data.message};to:${+event.data.message + 3} ${
            +event.data.message + 3
          } ${+event.data.message + 3};dur: 500;easing:linear;loop:true`
        );

        break;
      }
      case "wp": {
        wp();
        break;
      }
      case "wm": {
        wm();
        break;
      }
      case "lp": {
        lp();
        break;
      }
      case "lm": {
        lm();
        break;
      }
      case "deletearrow": {
        setcurrent({
          ...current,
          coords: current.coords.filter((item) => item.id != circle.current),
        });
        circle.current = null;
        window.parent.postMessage({ message: "arrowdeleted" }, "*");
        break;
      }
      case "deletetext": {
        setcurrent({
          ...current,
          infos: current.infos.filter((item) => item.id != circle.current),
        });
        circle.current = null;
        window.parent.postMessage({ message: "textdeleted" }, "*");
        break;
      }
      case "valuechange": {
        selected.current.setAttribute("text", {
          ...selected.current.getAttribute("text"),
          value: event.data.message,
        });
        break
      }
      case "idtogoselected": {
        idtogo.current = event.data.message
        handleAdd()
        break
      }
    }
  };

  useEffect(() => {
    window.addEventListener("message", messagehandler);
    return () => window.removeEventListener("message", messagehandler);
  }, [circle.current, current]);

  useEffect(() => {
    window.parent.postMessage({ message: "domcontentloaded" }, "*")
  }, []);

  let handletextadd = function () {
    document
      .getElementById("cursor")
      .setAttribute("raycaster", "objects:a-sky");
    document.querySelector("a-sky").addEventListener("click", b);
  };

  let b = (event) => {
    handleskyclicktext(event);
    document
      .getElementById("cursor")
      .setAttribute("raycaster", "objects:a-box");
    document.querySelector("a-sky").removeEventListener("click", b);
  };

  let handleskyclicktext = (event) => {
    let intersection = event.detail.intersection.point;
    let px = intersection.x;
    let py = intersection.y;
    let pz = intersection.z;
    let prx = 0,
      pry = 90,
      prz = 0;
    setcurrent((current) => ({
      ...current,
      infos: [
        ...current.infos,
        {
          id: lastId.current++,
          height: 80,
          width: 150,
          value: "HELLO WORLD",
          px,
          py,
          pz,
          prx,
          pry,
          prz,
        },
      ],
    }));
  };

  let handleclickarrow = (item) => {
    let element = document.getElementById(item.id);
    if (circle.current && circle.current != item.id) {
      if (selected.current.getAttribute("animation")) {
        selected.current.removeAttribute("animation");
        selected.current.setAttribute(
          "scale",
          `${+finalSize.current} ${+finalSize.current} ${+finalSize.current}`
        );
        finalSize.current = null;
        firstclick.current = true;
      }
      if (
        selected.current.getAttribute("material") &&
        selected.current.getAttribute("material").color == "red"
      ) {
        selected.current.setAttribute("color", "black");
      }
      selected.current.dataset.selected = "";
      setAxes(false)
      setPos(null)
    }
    if (!element.dataset.selected) {
      if (firstclick.current) {
        finalSize.current = document
          .getElementById(item.id)
          .getAttribute("scale").x;
        firstclick.current = false;
      }
      element.dataset.selected = "a";
      let pos = element.getAttribute("position");
      let rot = element.getAttribute("rotation");
      window.parent.postMessage({ message: "displayoptionsarrow" }, "*")
      element.setAttribute(
        "animation",
        `property: scale; from: ${+finalSize.current} ${+finalSize.current} ${+finalSize.current}; to: ${
          +finalSize.current + 3
        } ${+finalSize.current + 3} ${
          +finalSize.current + 3
        }; dur: 500; easing: linear; loop: true;`
      )
      circle.current = item.id;
      selected.current = document.getElementById(circle.current);
      setPos(document.getElementById(circle.current).getAttribute('position'))
      setAxes(true);
    } else {
      firstclick.current = true;
      element.dataset.selected = "";
      window.parent.postMessage({ message: "hideoptions" }, "*");
      element.removeAttribute("animation");
      element.setAttribute(
        "scale",
        `${+finalSize.current} ${+finalSize.current} ${+finalSize.current}`
      );
      circle.current = null;
      selected.current = null;
      setAxes(false)
      setPos(null)
    }
  };

  let handleclicktext = (item) => {
    let element = document.getElementById(item.id)
    if (circle.current && circle.current != item.id) {
      if (selected.current.getAttribute("animation"))
        selected.current.removeAttribute("animation");
      if (
        selected.current.getAttribute("material") &&
        selected.current.getAttribute("material").color == "red"
      )
      selected.current.setAttribute("color", "black");
      setAxes(false)
      setPos(null)
    }
    if (element.getAttribute("material").color=='black') {
      window.parent.postMessage({ message: "displayoptionstext" }, "*");
      element.setAttribute("material", {
        ...element.getAttribute("material"),
        color: "red",
      });
      circle.current = item.id;
      selected.current = document.getElementById(circle.current);
      setPos(
        document.getElementById(circle.current).getAttribute("position")
      );
      setAxes(true);
    } else {
      window.parent.postMessage({ message: "hideoptions" }, "*");
      element.setAttribute("material", {
        ...element.getAttribute("material"),
        color: "black",
      });
      circle.current = null;
      selected.current = null;
      setAxes(false)
      setPos(null)
    }
  };

  let handledelete = () => {
    changes.current.push({
      type: "delete",
      sceneId: current.id,
      id: lastId.current,
    });
    setcurrent((current) => ({
      ...current,
      coords: current.coords.filter((element) => {
        if (circle.current == element.id) {
          return false;
        }
        return true;
      }),
    }));
  };

  let handleAdd = () => {
    document
      .getElementById("cursor")
      .setAttribute("raycaster", "objects:a-sky");
    document.querySelector("a-sky").addEventListener("click", a);
  };

  let a = (event) => {
    handleskyclick(event);
    document
      .getElementById("cursor")
      .setAttribute("raycaster", "objects:a-box");
    document.querySelector("a-sky").removeEventListener("click", a);
  };

  let handleskyclick = (event) => {
    let intersection = event.detail.intersection.point;
    let x = intersection.x;
    let y = intersection.y;
    let z = intersection.z;
    let rx = 0,
      ry = 0,
      rz = 0;
    changes.current.push({
      type: "new",
      id: lastId.current,
      x: x,
      y: y,
      z: z,
    });
    setcurrent((current) => ({
      ...current,
      coords: [
        ...current.coords,
        { id: lastId.current++, x, y, z, rx, ry, rz, s: 15, idtogo: null },
      ],
    }))
  };

  return current ? (
    <a-scene>
      <a-sky
        radius="500"
        id="sky"
        src={"./pictures/" + current.principal_image}
        material="opacity:0.5"
        animation="property: material.opacity; from: 0.5; to: 1; dur: 500; easing: linear; loop: false"
      ></a-sky>
      <a-camera
        universal-controls
        look-controls="reverseMouseDrag: true"
        id="camera"
      ></a-camera>
      <a-entity
        cursor="fuse: false;rayOrigin:mouse;"
        raycaster="objects:a-entity"
      ></a-entity>
      <a-entity
        cursor="fuse: false;rayOrigin:mouse;"
        raycaster="objects:a-plane"
      ></a-entity>
      <a-entity
        cursor="fuse: false;rayOrigin:mouse;"
        raycaster="objects:a-box"
        id="cursor"
      ></a-entity>
      <Spheres coords={current.coords} handler={handleclickarrow}></Spheres>
      {axes ? (
        <Axes
          item={pos}
        />
      ) : null}
      <Infos coords={current.infos} handler={handleclicktext}></Infos>
      <Other coords={current.other}></Other>
    </a-scene>
  ) : null;
}

export default Main;