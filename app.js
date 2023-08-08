import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();
const puerto = 8080;

app.engine("handlebars", handlebars.engine())
app.use(express.json());
app.use("/api/products/", productsRouter);
app.use("/api/carts/", cartsRouter);

app.listen(puerto, () => {
    console.log("Servidor activo en el puerto: " + puerto);
});