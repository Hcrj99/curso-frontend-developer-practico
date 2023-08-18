const Menu_email = document.querySelector('.navbar-email');
const Desktop_menu = document.querySelector('.desktop-menu');
const Hamburguer_menu = document.querySelector('.menu');
const Mobile_menu = document.querySelector('.mobile-menu');
const Carrito_menu = document.querySelector('.product-detail');
const Carrito_icon_menu = document.querySelector('.navbar-shopping-cart');
const Cards_container = document.querySelector('.cards-container');


Menu_email.addEventListener('click', toggleDesktop_menu);
Hamburguer_menu.addEventListener('click', togglMobile_menu);
Carrito_icon_menu.addEventListener('click', toggleCarrito_menu);

function toggleDesktop_menu(){
    const Mobile_carrito_closed = Carrito_menu.classList.contains('inactive');

    if(!Mobile_carrito_closed){
        Carrito_menu.classList.add("inactive");
    }

    Desktop_menu.classList.toggle('inactive');
}

function togglMobile_menu(){

    const Mobile_carrito_closed = Carrito_menu.classList.contains('inactive');

    if(!Mobile_carrito_closed){
        Carrito_menu.classList.add("inactive");
    }

    Mobile_menu.classList.toggle("inactive");
}

function toggleCarrito_menu(){

    const Mobile_menu_closed = Mobile_menu.classList.contains('inactive');
    const Desktop_menu_open = Desktop_menu.classList.contains('inactice');

    if(!Mobile_menu_closed){
        Mobile_menu.classList.add("inactive");
    }

    if(!Desktop_menu_open){
        Desktop_menu.classList.add("inactive");
    }

    Carrito_menu.classList.toggle('inactive');
}

const Product_list = [];

Product_list.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

Product_list.push({
    name: 'Car',
    price: 120000,
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
});

Product_list.push({
    name: 'Computer',
    price: 1200,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
</div> */

function Render_products(Package_products){
    for(product of Package_products){
        const Product_card = document.createElement('section');
        Product_card.classList.add('product-card');

            const Product_img = document.createElement('img');
            Product_img.setAttribute('src', product.image);

            const Product_info = document.createElement('div');
            Product_info.classList.add('product-info');

                const Product_inDIV = document.createElement('div');

                    const Product_price = document.createElement('p');
                    Product_price.innerText = '$' + product.price;
                    const Product_name = document.createElement('p');
                    Product_name.innerText = product.name;

                Product_inDIV.append(Product_price, Product_name);

                const Product_figure = document.createElement('figure');

                    const Product_img_car = document.createElement('img');
                    Product_img_car.setAttribute('src', './icons/bt_add_to_cart.svg');

                Product_figure.append(Product_img_car);

            Product_info.append(Product_inDIV, Product_figure);

        Product_card.append(Product_img, Product_info);

        Cards_container.append(Product_card);
    }
}

Render_products(Product_list);