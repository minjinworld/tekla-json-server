const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 4001;

server.use(middlewares);
server.use("/api", router); // 라우터 접두어 추가

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
