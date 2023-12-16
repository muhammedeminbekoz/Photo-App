const express = require("express");
const path = require("path");

const app = express();

//Middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "temp/about.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT} koşmaya başladı`);
});
