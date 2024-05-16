let express = require("express");
let server = new express();
let cors = require("cors");
let path = require("path");

server.use(cors());

server.use(
  express.static(path.join(__dirname, "myapp", "build", "static", "css"))
);

server.use(
  express.static(path.join(__dirname, "myapp", "build", "static", "js"))
);

server.use(
  express.static(path.join(__dirname, "viewer", "build", "static", "css"))
);

server.use(
  express.static(path.join(__dirname, "viewer", "build", "static", "js"))
);

server.use(
  express.static(path.join(__dirname, "info"))
);

server.get("/direction_arrow/scene.gltf", (req, res) => {
  res.sendFile(
    path.join(__dirname, "direction_arrow", "scene.gltf")
  );
});

server.get("/info/scene.gltf", (req, res) => {
  res.sendFile(
    path.join(__dirname, "info", "scene.gltf")
  );
});

server.get("/appiframe", (req, res) => {
  res.sendFile(path.join(__dirname, "viewer", "build", "index.html"));
});

server.get("/globalapp", (req, res) => {
  res.sendFile(path.join(__dirname, "myapp", "build", "index.html"));
});

server.listen(5000, () => {
  console.log("listening at 5000");
});