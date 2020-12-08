/*
 * Configuration for VSCode's Apollo GraphQL extension.
 * This provides autocompletion for graphql queries
 * 
 * Extension: https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
 */
module.exports = {
  client: {
    service: {
      name: "github",
      localSchemaFile: "github-schema.json"
    }
  }
};
