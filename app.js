const express = require('express');
const app = express();
const { ProductManager } = require("./ProductManager");
const PM = new ProductManager();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('¡Hola tutor!');
}); ``

app.get('/products', function (req, res) {

    const limit = req.query.limit
    const products = PM.getProducts()
    console.log(products)
    res.send(products)
    //Traer los productos
    //     if (limit)
    // //devolver la cantidad limite
    //     else
    //Devolver todo

})



const puerto = 8080;

app.listen(puerto, () => {

    console.log(`Servidor Express escuchando en http://localhost:${puerto}`);
});