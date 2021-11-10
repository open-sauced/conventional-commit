#!/usr/bin/env node

const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
  cliPath: path.join(__dirname + '/../../../node_modules/commitizen'),
  // this is new
  config: {
    "path": "cz-conventional-changelog"
  }
});
