const base = require('../../.prettierrc.js');
const importOrder = [...base.importOrder];

const order = [
  //
  '^@tarojs/',
  'react',
  '^@taroify/',
];

importOrder.splice(1, 0, ...order);

module.exports = {
  ...base,
  importOrder,
};
