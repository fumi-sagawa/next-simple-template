const nextJest = require('next/jest')

// reflection to Next.js setting
const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  // Handle module aliases (this will be automatically configured for you soon)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
