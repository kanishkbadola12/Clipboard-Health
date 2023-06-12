const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  let candidate = "";

  if (event) {
    candidate = event.partitionKey || crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }

  if (candidate) {
    candidate = (typeof candidate !== "string") ? JSON.stringify(candidate) : candidate;
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  candidate = (candidate.length > MAX_PARTITION_KEY_LENGTH) ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate;

  return candidate;
}