// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
//       document.head.append(script);
//     });
//   }

//   test()

//   loadScript('./assetstest.js')
//     .then(() => {
//         test()
//     })
//     .catch((error) => console.log(error))

// console.log('Start');
// setTimeout(() => console.log('setTimeout'), 1000)
// console.log('End');

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve('success'), 3000)
// })

// promise.then((data) => console.log(data));

// let products = [];
// let productContainer = document.getElementById('products');

// function renderProducts(products){
    
//     let productsFullString = products.map(product => product.createTemplate()).join('');

//     productContainer.innerHTML = productsFullString;
// }

// class Product {
//     constructor({category, title, description, image, price}) {
//         this.category = category;
//         this.title = title;
//         this.description = description;
//         this.imageUrl = image;
//         this.price = price;
//     }

//     createTemplate() {
//         return `
//                 <div class="product">
//                     <h3 class="product-title">${this.title}</h3>
//                     <div class="product-category">
//                         Category: <b>${this.category}</b>
//                     </div>
//                     <hr>
//                     <div class="product-price">
//                         Price: <i>${this.price}</i>
//                     </div>
//                     <p class="product-description">
//                         ${this.description}
//                     </p>
//                 </div>
//         `;
//     }

    
// }

// fetch('https://fakestoreapi.com/products?limit=5')
//     .then(response => response.json())
//     .then((items) => products = items.map(product => new Product(product)))
//     .then(renderProducts)




// productContainer.addEventListener('click', function (event) {

//     if(!event.target.classList.contains('product-title')) {
//         return;
//     }

//     event.target.classList.toggle('active');

// })






// const a = new Promise((resolve, reject) => {
//     console.log('A');
//     resolve('B');
// })

// setTimeout(() => console.log('C'), 0)

// a.then( b => console.log(b))

// const d = () => console.log('D')

// d()




