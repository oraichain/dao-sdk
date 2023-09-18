module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': ['esbuild-jest', { isolatedModules: true, target: 'ES2020' }]
  },
  testPathIgnorePatterns: ['build/', 'node_modules/']
};
