const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'product.json');
const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });

}
module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {

        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products));
        });

    }

    static fetchAll(cb) { //we can directly call this method on this class, no need to instantiate an object
        getProductsFromFile(cb);
    }
};