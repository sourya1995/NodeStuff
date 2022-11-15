const products = [];

module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){ //we can directly call this method on this class, no need to instantiate an object
        return products;
    }
}