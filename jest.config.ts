import type { Config } from "jest";

const config: Config = {
  automock: false,
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["html", "text", "json"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test/jest.setup.ts"],
  testEnvironment: "jsdom",
};

export default config;
