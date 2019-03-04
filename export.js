require('dotenv').config();

const fs = require('fs');
const path = require('path');
const express = require('express');
const { postgraphile } = require('postgraphile');

const app = express();

const pgConfig = process.env.DATABASE_URL;
const schemaName = 'csv';
const options = {
  exportJsonSchemaPath: path.join(__dirname, 'export-json-schema.json'),
  exportGqlSchemaPath: path.join(__dirname, 'export-gql-schema.json'),
};

app.use(postgraphile(pgConfig, schemaName, options));
app.listen(3000, () => console.log('Postgraphile running at: http://localhost:3000'));
