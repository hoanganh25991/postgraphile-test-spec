const fs = require('fs');
const path = require('path');
const { generateNamespace } = require('@gql2ts/from-schema');

// const gqlSchema = fs.readFileSync(path.join(__dirname, 'gql-schema.graphql'), { encoding: 'utf8' });
const gqlSchemaJson = require('./export-json-schema.json');
const gqlTypes = generateNamespace('gateway', gqlSchemaJson);
fs.writeFileSync(path.join(__dirname, 'gql.ts'), gqlTypes);
