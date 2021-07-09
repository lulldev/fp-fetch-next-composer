import { getAllProducts } from './api/products';

(async () => {
  console.log(await getAllProducts()());
})();
