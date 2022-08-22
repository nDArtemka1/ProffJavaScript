const products = [
    { id: 1, title: 'Notebook', price: 2000 },
    { id: 2, title: 'Mouse', price: 20 },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (title, price, img = 'https://via.placeholder.com/150') => {
    return `<div class="product-item">
                <img src="${img}" alt="img">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
    //Если в метод join в качестве необязательного параметра разделителя мы указываем любой символ (либо не указываем вообще), 
    //то между элементами будет выводится символ/запятая (по умолчанию). В данном случае сепаратор указан пустым, ничего не выводится.
};

renderPage(products);

// Если честно,то без понятия что можно еще сократить,как по мне все итак очень коротко