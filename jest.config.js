module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["node_modules"],
    setupFiles: ["<rootDir>/test/setup.ts"],
    globalSetup: "<rootDir>/test/global/setup.ts",
    globalTeardown: "<rootDir>/test/global/teardown.ts"
};