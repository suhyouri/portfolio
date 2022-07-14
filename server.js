// //1. node server.js
// import express from "express";
// const app = express();
// import path from "path";
// const __dirname = path.resolve(); 
// import { createServer } from "http"; 

// const port = 5000;

// app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
// })

// const httpServer = createServer(app); 

// httpServer.listen(port, () => {
//   console.log(`it's alive on http://localhost:${port}`);
// });

// 2. Vercel Deployment
import express from "express";
import path from "path";
const __dirname = path.resolve();
const app = express();
const port = 5000;

app.use(express.static("public"));
//index.js
// app.get("/*", (req, res) => {
//   res.sendFile("index.html", { root: path.join(__dirname, "public") });
// });

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/static/", "index.html"));
});

// index.js
// module.exports = app;

app.listen(port, () => {
  console.log(`it's alive on http://localhost:${port}`);
});