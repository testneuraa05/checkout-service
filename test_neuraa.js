// Random Password Generator

function generatePassword(length = 12, options = {}) {
  const {
    uppercase = true,
    lowercase = true,
    numbers = true,
    symbols = true
  } = options;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allowedChars = "";
  if (uppercase) allowedChars += upperChars;
  if (lowercase) allowedChars += lowerChars;
  if (numbers) allowedChars += numberChars;
  if (symbols) allowedChars += symbolChars;

  if (!allowedChars) {
    throw new Error("At least one character type must be selected.");
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

// Example usage
const newPassword = generatePassword(16, {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false
});

console.log("Generated Password:", newPassword);