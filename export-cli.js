require('dotenv').config();

const cpr = require('child_process');

const cmd = `yarn postgraphile --no-server -c postgres://admin:admin@localhost:5432/vts-development --schema csv --export-schema-graphql gql-schema.graphql`;

// cpr.exec(cmd, { stdout: 'inherit' });
cpr.execSync(cmd, { stdio: 'inherit' });
