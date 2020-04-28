'use strict';
const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require('express-graphql');

const app = express();
const port = process.env.port || 3000;

// definiendo el esquema
const schema = buildSchema(`
  type Query {
    hello: String,
    saludo: String
  }
`);

//Configurar los resolvers

const resolvers = {
  hello: () => {
    return 'hola Mundo';
  },
  saludo: () => {
    return 'nuevo resolver';
  },
};

app.use(
  '/api',
  gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
