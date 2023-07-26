const {ProductManager} = require("./ProductManager");

const PM = new ProductManager();

const products = PM.getProducts();
console.log(products)


