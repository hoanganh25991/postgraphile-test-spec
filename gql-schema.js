const {
  graphql, //
  buildSchema, //
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

/* Example 1 */

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve() {
//           return 'world';
//         },
//       },
//     },
//   }),
// });

// // console.log('[schema]', schema);

// const query = '{ hello }';

// graphql(schema, query).then(response => {
//   // Prints
//   // {
//   //   data: { hello: "world" }
//   // }
//   console.log(response);
// });

/* Example 2 */

// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// const root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

// const query = '{ hello }';

// graphql(schema, query, root).then(response => {
//   console.log(response);
// });

/* Example 3 */

const schema = buildSchema(`
  type ShipData {
    imo: String
    mmsi: String
    shipName: String
    shipStatus: String
    flagName: String
    shipTypeLevel5: String
  }

  type ListShipData {
    totalCount: Int
    nodes: [ShipData]
  }

  type Query {
    shipDataByImo(imo: String!): ListShipData
  }
`);

const query = `{
  shipDataByImo(imo: "9876543") {
    totalCount
    nodes {
      imo
      mmsi
      shipName
    }
  }
}`;

const root = {};
const context = undefined;
const variables = undefined;
const operationName = undefined;
const fieldResolver = undefined;

graphql(
  schema, //
  query,
  root,
  context,
  variables,
  operationName,
  fieldResolver,
).then(response => {
  console.log(response);
});
