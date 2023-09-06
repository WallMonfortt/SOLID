type Size = ''|'small' | 'medium' | 'large';

class Product{
    constructor(
        public name: string,
        public price: number = 0,
        public size: Size = ''
    ){}

    isProductReady(): boolean{
        for(const key in this){
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`The ${key} is required`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`The ${key} is cero`);
                    break;
                default:
                    throw Error(`The ${key} is empty`);
            }
        }
        return true;
    }

    toString(){
        // NO DRY
        // if (this.name.length <= 0) throw Error('The name is required');
        // if (this.price <= 0) throw Error('The price is cero');
        // if (this.size.length <= 0) throw Error('The size is empty');

        // DRY
        
        if (!this.isProductReady()) throw Error('The product is not ready');
        return `Product: ${this.name}, ${this.price} , ${this.size}`;
    }
    
}

(()=>{
    const bluePants = new Product('Blue Pants', 20, 'small');
    console.log(bluePants.toString());
})();