const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["node_modules"],
    setupFiles: ["<rootDir>/test/setup.ts"],
    globalSetup: "<rootDir>/test/global/setup.ts",
    globalTeardown: "<rootDir>/test/global/teardown.ts",
    modulePaths: [`<rootDir>/${ compilerOptions.baseUrl }`],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};