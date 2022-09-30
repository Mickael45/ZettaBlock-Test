const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("api/src/db/db.json");
const db = low(adapter);

const createRecordModel = require("./record");

module.exports = {
  models: {
    Record: createRecordModel(db),
  },
  db,
};
