import express from "express";
const app = express();
import path from "path";
const __dirname = path.resolve(); 

import { createServer } from "http";  
const httpServer = createServer(app);

const port = 3000;
httpServer.listen(port, () => {
  console.log(`it's alive on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  // console.log(res);
    res.sendFile(path.join(__dirname + "/static/index.html"));
});

router.get("/", (req, res) => {
   res.send("Birds home page");
 });
 // define the about route
 router.get("/about", (req, res) => {
   res.send("About birds");
 });

// app.get("/posts", (req, res) => {
//   // res.send("about");
//   console.log("viewing Posts");
// });

// app.get("/settings", (req, res) => {
//   // res.send("about");
//   console.log("viewing Settings");
// });

//static**
app.use("/static", express.static("./static/"));

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

// app.use(
//   "/static",
//   express.static(path.resolve(__dirname, "frontend", "static"))
// );

// app.get("/", (req, res) => {
//   res.send(path.resolve("frontend", index.html));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
