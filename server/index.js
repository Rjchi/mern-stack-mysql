const express = require("express");
const cors = require("cors");
const { join } = require("path");
const { PORT } = require("./config.js");
// Rutas
const indexRoutes = require("./routes/index.routes.js")
const taskRoutes = require("./routes/task.routes.js")

const app = express();

app.use(cors())

// Procesamos json
app.use(express.json());

app.use(indexRoutes)
app.use(taskRoutes)

app.use(express.static(join(__dirname, "../client/dist")));

app.listen(PORT, () => console.log(`PORT ${PORT}`))