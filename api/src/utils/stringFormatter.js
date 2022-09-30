const { scrapTitleByLink } = require("./scrapper");

const matchOrDefault = (string, regex, defaultValue = []) =>
  string.match(regex) || defaultValue;

const replaceAll = (string, regex, replacement = "") =>
  string.replace(regex, replacement);

const extractEmoticons = (string) =>
  matchOrDefault(string, /\(\w+\)/g).map((emoticon) =>
    replaceAll(emoticon, /[{()}]/g)
  );

const extractMentions = (string) =>
  matchOrDefault(string, /@\w+/g).map((mention) => replaceAll(mention, /@/g));

const extractLinks = (string) =>
  matchOrDefault(string, /https?:\/\/\S+/g).map((link) => ({
    url: link,
    title: scrapTitleByLink(link),
  }));

module.exports = {
  extractEmoticons,
  extractMentions,
  extractLinks,
};
