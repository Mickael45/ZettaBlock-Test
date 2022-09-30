const nanoid = require("nanoid");

const createRecordModel = (db) => {
  return {
    create(record) {
      const newRecord = { id: nanoid(), ...record };

      db.get("record").push(newRecord).write();
      return newRecord;
    },
  };
};

module.exports = createRecordModel;
