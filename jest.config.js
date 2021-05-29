module.exports = {
    globals: {
      'ts-jest': {
        tsConfig: 'tsconfig-jest.json',
      },
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.(ts|js)$': 'ts-jest',
    },
    testMatch: [
      '**/tests/*.test.(ts|js)',
    ],
    testEnvironment: 'node',
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  }