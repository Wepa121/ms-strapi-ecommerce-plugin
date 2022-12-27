'use strict'

module.exports = {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/products",
      handler: "product.find",
      config:{
        policies: []
      }
    },
    {
      method: "GET",
      path: "/product/:id",
      handler: "product.findOne",
      config:{
        policies: []
      }
    },
    {
      method: "POST",
      path: "/products",
      handler: "product.create",
      config:{
        policies: []
      }
    },
    {
      method: "DELETE",
      path: "/product/:id",
      handler: "product.delete",
      config:{
        policies: []
      }
    },
  ]
}