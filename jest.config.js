// jest.config.js
export default {
  // ...other configuration options
  testEnvironment: 'node',
  transform: {},
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  extensionsToTreatAsEsm: ['.js', '.jsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust the path as per your project structure
  },
};
