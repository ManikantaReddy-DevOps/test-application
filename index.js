const leftPad = require("left-pad");

function formatId(record) {
  return leftPad(record.id, 6, "0");
}

const records = [{ id: 42 }, { id: 7 }, null, { id: 128 }];

records.forEach((record) => {
  console.log(formatId(record));
});
