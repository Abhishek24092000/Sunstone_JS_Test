const products = {
  'apple': 1.2,
  'banana': 0.5,
  'orange': 0.8
};

function getProductPrice(productId) {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (products.hasOwnProperty(productId)) {
        resolve(products[productId]);
      } else {
        reject(`Error: Product '${productId}' not found`);
      }
    }, 1000);
  });
}


getProductPrice('apple')
  .then(price => {
    console.log(`The price of apple is $${price}`);
  })
  .catch(error => {
    console.error(error);
  });

getProductPrice('mango')
  .then(price => {
    console.log(`The price of mango is $${price}`);
  })
  .catch(error => {
    console.error(error);
  });
