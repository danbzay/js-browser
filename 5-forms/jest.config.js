/** @type {import('jest').Config} */
const config = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'jest-transform-css',
  },
};

module.exports = config;
