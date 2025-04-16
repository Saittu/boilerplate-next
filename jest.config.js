export default {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', //should be tested in e2e
    '!src/styles/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.stories\\.tsx$',
    '/.storybook/',
    'index\\.ts$'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Alias @/ → src/
    '^@components/(.*)$': '<rootDir>/src/components/$1' // Exemplo específico
  },
  testMatch: ['**/__tests__/**/*.test.ts?(x)'],
  clearMocks: true
}
