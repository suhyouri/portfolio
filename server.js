import express from "express";
const app = express();
import path from "path";
const __dirname = path.resolve(); 
import { createServer } from "http"; 

const port = 5000;

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})

const httpServer = createServer(app); 

httpServer.listen(port, () => {
  console.log(`it's alive on http://localhost:${port}`);
});