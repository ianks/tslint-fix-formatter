# 🔧 tslint-fix-formatter

[![npm version](https://badge.fury.io/js/tslint-fix-formatter.svg)](https://badge.fury.io/js/tslint-fix-formatter)

A formatter for [tslint](https://github.com/palantir/tslint) which applies
fixes to a file, and prints the new contents to stdout. This is useful for
certain editor plugins (i.e. [neoformat](https://github.com/sbdchd/neoformat))
which prefer to have the changed contents of a file, instead of overwriting the
file.

## Usage

1. Install the package: `yarn add --dev tslint-fix-formatter`
2. Run the linter: `tslint -s node_modules/tslint-fix-formatter -t fix MyFile.ts`
