const crypto = require("crypto");
const TRIVIAL_PARTITION_KEY = 0;

describe("deterministicPartitionKey", function() {
  it("should return the partition key if it exists in the event", function() {
    const event = { partitionKey: "kanishk-badola" };
    const expectedPartitionKey = "kanishk-badola";
    const partitionKey = deterministicPartitionKey(event);

    expect(partitionKey).toBe(expectedPartitionKey);
  });

  it("should generate a partition key if the event does not have a partition key", function() {
    const event = { partitionKey: "kanishk-badola" };
    const expectedPartitionKey = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    const partitionKey = deterministicPartitionKey(event);

    expect(partitionKey).toBe(expectedPartitionKey);
  });

  it("should generate a trivial partition key if the event is falsy", function() {
    const event = null;
    const expectedPartitionKey = TRIVIAL_PARTITION_KEY;
    const partitionKey = deterministicPartitionKey(event);

    expect(partitionKey).toBe(expectedPartitionKey);
  });

  it("should hash the partition key if it exceeds the maximum length", function() {
    const longKey = "a".repeat(300);
    const event = { partitionKey: longKey };
    const expectedPartitionKey = crypto.createHash("sha3-512").update(longKey).digest("hex");
    const partitionKey = deterministicPartitionKey(event);

    expect(partitionKey).toBe(expectedPartitionKey);
  });
});