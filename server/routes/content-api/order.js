'use strict'

module.exports = {
  type: "content-api",
  routes: [
    {
      method: "GET",
      path: "/orders",
      handler: "order.find",
      config:{
        policies: []
      }
    },
    {
      method: "GET",
      path: "/order/:id",
      handler: "order.findOne",
      config:{
        policies: []
      }
    },
    {
      method: "POST",
      path: "/orders",
      handler: "order.create",
      config:{
        policies: []
      }
    },
    {
      method: "DELETE",
      path: "/order/:id",
      handler: "order.delete",
      config:{
        policies: []
      }
    },
  ]
}