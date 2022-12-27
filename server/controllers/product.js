'use strict'

module.exports = {
  async find(ctx){
    const entries = await strapi.entityService.findMany('plugin::e-commerce.product');
    return entries
  },
  async findOne(ctx){
    const entry = await strapi.entityService.findOne('plugin::e-commerce.product', ctx.params.id);
    return entry
  },
  async create(ctx){
  },
  async delete(ctx){

  }
}