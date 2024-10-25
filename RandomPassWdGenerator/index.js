function generatePassword(
  length,
  includeLowercase,
  includeNumber,
  includeSymbols,
  includeUppercase
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbolChars = "`~!@#$%^&*()-_=+[]{}|;:',.<>?/\"";
  const numberChars = "0123456789";

  let allowedChars = "";

  let password = "";
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumber ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";


  if (length <= 0) {
    return `(password lenght must be atleast 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least one set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomindex];
  }

  return password;
}

const passwordLength = 64;
const includeUppercase = true;
const includeLowercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeNumber,
  includeSymbols,
  includeUppercase
);

console.log("====================================");
console.log(`Generated password: ${password}`);
console.log("====================================");
