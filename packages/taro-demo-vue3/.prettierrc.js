const base = require('../../.prettierrc.js');
const importOrder = [...base.importOrder];

const order = [
  //
  '^@tarojs/',
  '^vue(/.*)?$',
  '^vue.+$',
  '^@nutui/',
];

importOrder.splice(1, 0, ...order);

module.exports = {
  ...base,
  importOrder,
};
