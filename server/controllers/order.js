'use strict'

module.exports = {
  async find(ctx){
    const entries = await strapi.entityService.findMany('plugin::e-commerce.order');
    return entries
  },
  async findOne(ctx){
    const entry = await strapi.entityService.findOne('plugin::e-commerce.order', ctx.params.id);
    return entry
  },
  async create(ctx){
  },
  async delete(ctx){

  }
}