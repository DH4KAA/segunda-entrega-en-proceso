const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola tutor!')
})

app.get('/products', (req, res) => {
    const limit = parseInt(req.query.limit);

    fs.readFile('Products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de productos:', err);
            return res.status(500).json({ error: 'Error al leer los productos' });
        }

        const products = JSON.parse(data);

        if (limit && limit > 0) {
            const limitedProducts = products.slice(0, limit);
            return res.json(limitedProducts);
        } else {
            return res.json(products);
        }
    });
});

app.get('/products/:pid', (req, res) => {
    const pid = parseInt(req.params.pid);

    fs.readFile('Products.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo de productos:', err);
            return res.status(500).json({ error: 'Error al leer los productos' });
        }

        const products = JSON.parse(data);
        const product = products.find((p) => p.id === pid);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        return res.json(product);
    });
});



const puerto = 8080
app.listen(puerto, () => {

    console.log(`Servidor Express escuchando en http://localhost:${puerto}`);
})