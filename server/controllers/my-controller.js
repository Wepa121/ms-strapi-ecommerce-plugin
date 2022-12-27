'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('e-commerce')
      .service('myService')
      .getWelcomeMessage();
  },
});
