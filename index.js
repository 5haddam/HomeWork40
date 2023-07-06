const catalogue = [
  {
    category: 'Phones',
    products: [
      {
        image: 'https://img.ktc.ua/img/base/1/7/363857.jpg',
        title: 'iPhone 13',
        price: '1000$',
        description: 'The iPhone 13 features a 6.1-inch Super Retina XDR display, A15 Bionic chip, and advanced dual-camera system. It offers improved performance, longer battery life, and enhanced photography capabilities.'
      },
      {
        image: 'https://cdn11.bigcommerce.com/s-ss31ap/images/stencil/1280x1280/products/7239/21735/Samsung_Galaxy_S10_SM-G970U_128Gb_Black__73345.1630374083.jpg?c=2',
        title: 'Samsung Galaxy S10',
        price: '500$',
        description: 'The Samsung Galaxy S10 features a 6.1-inch Quad HD+ Dynamic AMOLED display, triple rear cameras, and an ultrasonic fingerprint sensor. It is powered by a high-performance processor and offers a range of advanced features.'
      },
      {
        image: 'https://hotline.ua/img/tx/213/2132535025.jpg',
        title: 'Google Pixel 4',
        price: '800$',
        description: 'The Google Pixel 4 boasts a stunning 5.7-inch Full HD+ OLED display, a powerful Snapdragon processor, and an exceptional camera system. It offers a pure Android experience with seamless integration of Google services.'
      },
      {
        image: 'https://hotline.ua/img/tx/193/1934778475.jpg',
        title: 'Huawei P30 Pro',
        price: '700$',
        description: 'The Huawei P30 Pro features a 6.47-inch OLED display, a Leica quad-camera system, and a large battery capacity. It offers impressive photography capabilities and advanced features for a premium mobile experience.'
      }
    ]
  },
  {
    category: 'Laptops',
    products: [
      {
        image: 'https://files.foxtrot.com.ua/PhotoNew/img_0_58_20633_0_1.jpg',
        title: 'MacBook Pro',
        price: '1500$',
        description: 'The MacBook Pro is a powerful laptop with a sleek design and high-performance specifications. It is widely used by professionals and offers a seamless user experience.'
      },
      {
        image: 'https://hotline.ua/img/tx/388/3880126965.jpg',
        title: 'Dell XPS 13',
        price: '1200$',
        description: 'The Dell XPS 13 is a popular ultrabook known for its compact size, stunning display, and excellent performance. It is a favorite choice for users who value portability and productivity.'
      },
      {
        image: 'https://hotline.ua/img/tx/373/3730051935.jpg',
        title: 'HP Spectre x360',
        price: '1000$',
        description: 'The HP Spectre x360 is a versatile 2-in-1 laptop with a sleek design and powerful performance. It features a 360-degree hinge, allowing it to be used in laptop, tablet, tent, and stand modes.'
      },
      {
        image: 'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-x1-carbon-gen-10-hero.png?context=bWFzdGVyfHJvb3R8NDk2OTY3fGltYWdlL3BuZ3xoZWQvaDdiLzEzMTM1OTk1NTY4MTU4LnBuZ3xmNGQzMmI4ZTA3M2UyN2YxYjdkMTk2YTk3NmVlNDYyOWFmZGIzYjk4ZjMyNzRmZTQ5ZjE4YTI0YmJmYTI2YTFj',
        title: 'Lenovo ThinkPad X1 Carbon',
        price: '1300$',
        description: 'The Lenovo ThinkPad X1 Carbon is a business-class laptop known for its durability, excellent keyboard, and long battery life. It offers powerful performance and a lightweight design for professionals on the go.'
      }
    ]
  },
  {
    category: 'Headphones',
    products: [
      {
        image: 'https://www.sony.ua/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        title: 'Sony WH-1000XM4',
        price: '350$',
        description: 'The Sony WH-1000XM4 is a top-of-the-line wireless noise-canceling headphone with excellent sound quality and advanced features. It offers long battery life and customizableнастройки для наилучшего воспроизведения звука.'
      },
      {
        image: 'https://hotline.ua/img/tx/211/2113157695.jpg',
        title: 'Apple AirPods Pro',
        price: '250$',
        description: 'The Apple AirPods Pro are true wireless earbuds with active noise cancellation and a customizable fit. They offer seamless integration with Apple devices and deliver high-quality sound.'
      },
      {
        image: 'https://applecountry.com.ua/image/cache/catalog/files/products/bose-quietcomfort-headphones-silver-1.1000x-800x800.jpg',
        title: 'Bose QuietComfort 35 II',
        price: '300$',
        description: 'The Bose QuietComfort 35 II is a popular wireless headphone with renowned noise cancellation technology. It provides a comfortable fit, balanced sound, and long battery life for extended listening sessions.'
      },
      {
        image: 'https://images.prom.ua/3886653724_w640_h640_besprovodnye-naushniki-vkladyshi-jbl.jpg',
        title: 'JBL Free X',
        price: '100$',
        description: 'The JBL Free X is a true wireless earbud with a compact design and good sound quality. It offers a secure fit and is ideal for active individuals who want freedom from wires.'
      }
    ]
  },
  {
    category: 'Smartwatches',
    products: [
      {
        image: 'https://hotline.ua/img/tx/237/2378373115.jpg',
        title: 'Apple Watch Series 6',
        price: '400$',
        description: 'The Apple Watch Series 6 is a feature-rich smartwatch with advanced health and fitness tracking capabilities. It offers an always-on display, ECG monitoring, and seamless integration with iPhone.'
      },
      {
        image: 'https://hotline.ua/img/tx/393/3938417165.jpg',
        title: 'Samsung Galaxy Watch Active2',
        price: '300$',
        description: 'The Samsung Galaxy Watch Active2 is a stylish and versatile smartwatch with fitness tracking features and a range of customizable watch faces. It offers a smooth user experience and works well with Android devices.'
      },
      {
        image: 'https://hotline.ua/img/tx/381/3810057235.jpg',
        title: 'Fitbit Versa 3',
        price: '200$',
        description: 'The Fitbit Versa 3 is a fitness-focused smartwatch with built-in GPS, heart rate monitoring, and sleep tracking. It offers a variety of workout modes and provides insights to help you achieve your fitness goals.'
      },
      {
        image: 'https://garmin.ua/upload/iblock/3be/forerunner245-slate2.jpg',
        title: 'Garmin Forerunner 245',
        price: '250$',
        description: 'The Garmin Forerunner 245 is a GPS running watch with advanced running dynamics and training features. It provides accurate tracking of distance, pace, and heart rate, making it a valuable tool for runners.'
      }
    ]
  }
];

class Category {
  constructor(categoryAndProducts) {
    this.category = categoryAndProducts.category;
    this.products = categoryAndProducts.products;
    this.createElements();
    this.renderCategories();
    this.attachEventHandlers();
  }
  renderCategories() {
    this.p.innerText = this.category;
    this.categories.append(this.p);
  }
  attachEventHandlers() {
    this.p.addEventListener('click', (e) => this.renderProducts());
  }
  createElements() {
    this.categories = document.querySelector('.categories');
    this.p = document.createElement('p');
    this.productsDiv = document.querySelector('.products');
  }
  renderProducts() {
    this.productsDiv.innerText = '';
    this.products.forEach(product => new Product(product));
  }
}

class Product {
  constructor(product) {
    this.image = product.image;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.createElements();
    this.renderProducts();
    this.attachEventHandlers();
  }
  createElements() {
    this.products = document.querySelector('.products');
    this.about = document.querySelector('.about');
    this.modal = document.querySelector('#modal-wrapp');
    this.divInProducts = document.createElement('div');
    this.imgInProducts = document.createElement('img');
    this.titleInProducts = document.createElement('p');
    this.priceInProducts = document.createElement('p');
    this.divInProduct = document.createElement('div');
    this.imgInProduct = document.createElement('img');
    this.titleInProduct = document.createElement('p');
    this.priceInProduct = document.createElement('p');
    this.descriptionInProduc = document.createElement('p');
    this.buyButton = document.createElement('button');
  }
  attachEventHandlers() {
    this.divInProducts.addEventListener('click', () => this.renderProduct());
    this.buyButton.addEventListener('click', () => this.toggleModalWindow());
    this.modal.onclick = () => this.backToItsoriginalState();
  }
  backToItsoriginalState() {
    this.about.innerText = '';
    this.products.innerText = '';
    this.toggleModalWindow();
  }
  toggleModalWindow() {
    this.modal.classList.toggle('d-none');
  }
  renderProducts() {
    this.imgInProducts.src = this.image;
    this.imgInProducts.width = 200;
    this.titleInProducts.innerText = this.title;
    this.priceInProducts.innerText = this.price;
    this.divInProducts.append(this.imgInProducts, this.titleInProducts, this.priceInProducts);
    this.products.append(this.divInProducts);
  }
  renderProduct() {
    this.about.innerText = '';
    this.imgInProduct.src = this.image;
    this.imgInProduct.width = 400;
    this.buyButton.type = 'button';
    this.buyButton.innerText = 'Buy';
    this.buyButton.classList.add('buy-button');
    this.titleInProduct.innerText = this.title;
    this.priceInProduct.innerText = this.price;
    this.descriptionInProduc.innerText = this.description;
    this.divInProduct.append(this.imgInProduct, this.titleInProduct, this.priceInProduct, this.buyButton, this.descriptionInProduc);
    this.about.append(this.divInProduct);
  }
}

catalogue.forEach(a => new Category(a));
