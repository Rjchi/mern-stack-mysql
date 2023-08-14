const express = require("express");
const PORT = require("./config.js");
// Rutas
const indexRoutes = require("./routes/index.routes.js")
const taskRoutes = require("./routes/task.routes.js")

const app = express();

app.use(indexRoutes)
app.use(taskRoutes)


app.listen(PORT, () => console.log(`PORT ${PORT}`))