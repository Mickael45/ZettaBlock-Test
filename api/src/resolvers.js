const {
  extractMentions,
  extractEmoticons,
  extractLinks,
} = require("./utils/stringFormatter");

module.exports = {
  Mutation: {
    records(_, { message }, { models }) {
      const mentions = extractMentions(message);
      const emoticons = extractEmoticons(message);
      const links = extractLinks(message);

      const record = models.Record.create({
        mentions,
        emoticons,
        links,
      });

      return record;
    },
  },
};
