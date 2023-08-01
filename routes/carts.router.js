import { Router } from "express";
import CartManager from "../CartManager.js";

const cartsRouter = Router();
const CM = new CartManager();

cartsRouter.post("/", (req, res) => {
    if (CM.newCart()) {
        res.send({ status: "ok", message: "El Carrito ha creado correctamente!" });
    } else {
        res.status(500).send({ status: "error", message: "Error! No se pudo crear el Carrito!" });
    }
});

cartsRouter.get("/:cid", (req, res) => {
    const cid = Number(req.params.cid);
    const cart = CM.getCart(cid);

    if (cart) {
        res.send({ products: cart.products });
    } else {
        res.status(400).send({ status: "error", message: "Error! No se encuentra el ID de Carrito!" });
    }
});

cartsRouter.post("/:cid/products/:pid", (req, res) => {
    const cid = Number(req.params.cid);
    const pid = Number(req.params.pid);
    const cart = CM.getCart(cid);

    if (cart) {
        if (CM.addProductToCart(cid, pid)) {
            res.send({ status: "ok", message: "El producto se agregó correctamente!" });
        } else {
            res.status(400).send({ status: "error", message: "Error! No se ha podido agregar el producto al carrito!" });
        }
    } else {
        res.status(400).send({ status: "error", message: "Error! No se encuentra el ID de Carrito!" });
    }
});

export default cartsRouter;