module.exports = {
  type: "admin",
  routes:[
    {
      method: 'GET',
      path: '/',
      handler: 'myController.index',
      config: {
        policies: [],
      },
    },
  ]
} 
  
