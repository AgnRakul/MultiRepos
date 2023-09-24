const express = require("express");
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const Schema = require("./schema/schema.js");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: Schema,
  })
);

app.get("/", (req, res) => {
  res.send("GraphQL Example");
});

app.listen(8000, () => {
  console.log(`app listening at http://localhost:${8000}`);
});
