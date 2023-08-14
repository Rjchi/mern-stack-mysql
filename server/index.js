const express = require("express");
const PORT = require("./config.js");
// Ruta
const indexRoutes = require("./routes/index.routes.js")

const app = express();

app.use(indexRoutes)


app.listen(PORT, () => console.log(`PORT ${PORT}`))