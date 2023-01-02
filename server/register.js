// 'use strict';

// module.exports = ({ strapi }) => {
//   // registeration phase
// };


'use strict';

module.exports = ({ strapi }) => {
  Object.values(strapi.contentTypes).forEach(contentType => {
    if (contentType.uid.includes('plugin::users-permissions.user')) {
      contentType.attributes.orders = {
        type: 'relation',
        relation: 'oneToMany',
        target: 'plugin::e-commerce.order',
        mappedBy: 'owner', 
        private: false, 
        configurable: false,
      };
    }
  });
};