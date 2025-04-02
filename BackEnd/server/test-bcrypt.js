// test-bcrypt.js
const bcrypt = require("bcryptjs");

async function testBcrypt() {
  const testPassword = "testPassword123";

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(testPassword, salt);

  console.log("Original password:", testPassword);
  console.log("Hashed password:", hashedPassword);

  // Test comparison with correct password
  const correctMatch = await bcrypt.compare(testPassword, hashedPassword);
  console.log("Correct password match:", correctMatch);

  // Test comparison with incorrect password
  const incorrectMatch = await bcrypt.compare("wrongPassword", hashedPassword);
  console.log("Incorrect password match:", incorrectMatch);
}

testBcrypt().catch(console.error);
