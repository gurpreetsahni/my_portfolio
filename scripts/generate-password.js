// Run this script to generate a password hash for your admin login
// Usage: node scripts/generate-password.js YourPasswordHere

const bcrypt = require("bcryptjs");

const password = process.argv[2];

if (!password) {
  console.log("Usage: node scripts/generate-password.js <your-password>");
  console.log("Example: node scripts/generate-password.js MySecretPassword123");
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
console.log("\nGenerated hash:\n");
console.log(hash);
console.log("\nCopy this hash and set it as ADMIN_PASSWORD_HASH in your .env.local file.");
console.log("Example:");
console.log(`ADMIN_PASSWORD_HASH=${hash}`);
