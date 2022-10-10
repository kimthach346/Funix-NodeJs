const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product
    .findAll()
    .then(product => {
      res.render('shop/product-list', {
        prods: product,
        pageTitle: 'All products',
        path: '/products'
      });
    })
    .catch(err => console.log(err))
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId
  // Product.findAll({where: {id: prodId}})
  //   .then(product => {
  //     res.render('shop/product-detail', {
  //       product: product[0], 
  //       pageTitle: product.title,
  //       path: '/products'
  //     })
  //   })
  //   .catch(err => console.log(err))
  Product.findByPk(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product, 
        pageTitle: product.title,
        path: '/products'
      })
    })
    .catch(err => console.log(err))
}

exports.getIndex = (req, res, next) => {
  Product
    .findAll()
    .then(product => {
      res.render('shop/index', {
        prods: product,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => console.log(err))
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId   // name of the 'hidden' input
  console.log(prodId)
  res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
