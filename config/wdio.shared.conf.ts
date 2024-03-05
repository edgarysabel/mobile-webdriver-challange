import type { Options } from "@wdio/types";
export const config: Options.Testrunner = {
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  //
  maxInstances: 10,
  //
  logLevel: "info",
  //
  bail: 0,
  //
  baseUrl: "http://localhost",
  //
  waitforTimeout: 10000,
  //
  connectionRetryTimeout: 120000,
  //
  connectionRetryCount: 3,

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  capabilities: [],
};
