const css = require('./CSS');

const title = {
  $id: "http://json-schema.org/draft-04/schema/title.json",
  $schema: "http://json-schema.org/draft-04/schema#",
  title: "title node schema",
  description: "json constraint for title node",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 36
    },
    category: {
      type: "string",
      pattern: "title"
    },
    lg: {
      type: "object",
      properties: css.properties
    }
  },
  required: ["id", "category"]
}

module.exports = title;
