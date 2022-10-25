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
  testPathIgnorePatterns: ['<rootDir>/e2e/'],
  coverageDirectory:'__report__/jest-coverage',
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "__report__",
        filename: "jest.html",
      },
    ],
  ],
}

module.exports = createJestConfig(customJestConfig)
