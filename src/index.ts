import { getAllProducts } from './api/products';

(async () => {
  console.log('Call API method getAllProducts', await getAllProducts()());
})();
