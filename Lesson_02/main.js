class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productJbj = new ProductItem(product);
            this.allProducts.push(productJbj)
            block.insertAdjacentHTML('beforeend', productJbj.render());
        }
    }
    getSum() {
        let result = this.allProducts.reduce((summ, item) => summ + item.price, 0);
        console.log(result);
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/150') {
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                    <img src="${this.img}" alt="img">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                </div>`
    }
}

const list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
    render() {

    }
}
