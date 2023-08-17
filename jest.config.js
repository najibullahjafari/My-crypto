// jest.config.js
export default {
  // ...other configuration options
  testEnvironment: 'jsdom', // or 'node' if necessary
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
