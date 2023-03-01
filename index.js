const express = require("express");
const router = require("./rutas/router.js");

const app = express();
app.use(express.json());
app.use(router);

app.listen(3001, () => {
    console.log("escuchando carito")
});


