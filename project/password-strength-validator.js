// 🧩 Core Objective
// Analyzes password input in real-time.
// Gives strength feedback based on rules and pattern matching.
// Suggests stronger passwords.
// Checks for similarity with common passwords using string algorithms.

// Gives strength feedback based on rules and pattern matching.
function isPasswordStrong(p) {
  let password = p.trim();
  if (!password.length) return "Please enter a password";

  let feedbackRules = [];
  let feedbackPercentage = 100; // 20% for each
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  if (password.length < 8 || password.length > 15) {
    feedbackRules.push("Length should > 8 & Length should > 15");
    feedbackPercentage -= 20;
  }
  if (!hasUpperCase) {
    feedbackRules.push("Need UPPERCASE");
    feedbackPercentage -= 20;
  }
  if (!hasLowerCase) {
    feedbackRules.push("need lowercase");
    feedbackPercentage -= 20;
  }
  if (!hasNumber) {
    feedbackRules.push("need number");
    feedbackPercentage -= 20;
  }
  if (!hasSpecialChar) {
    feedbackRules.push("need Special Char");
    feedbackPercentage -= 20;
  }
  return { feedbackPercentage, feedbackRules }
}

// Replace Common Letters
function replaceChars(password) {
  const replaceWithUnique = { a: '@', s: '$', o: '0', x: '*', i: '1', l: '1' };
  return password.split("").map(char => replaceWithUnique[char] || char).join("");
}
// Add missing elements
function enforceRules(password) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  if (!hasUpperCase) password = password[0].toUpperCase() + password.slice(1);
  if (!hasNumber) password += Math.floor(Math.random() * 100)
  if (!hasSpecialChar) password += '!'

  return password;
}
// Randomize the order
function shuffleString(password) {
  for (let i = password.length - 1; i > 0; i--) {
    let shufflePosition = Math.floor(Math.random() * (i + 1));
    [password[i], password[shufflePosition]] = [password[shufflePosition], password[i]];
    return password;
  }
}
// Suggests stronger passwords.
function suggestsStrongerPasswords(weekPassword) {
  const replaced = replaceChars(weekPassword);
  const enforced = enforceRules(replaced);
  return shuffleString(enforced);
}


console.log("isPasswordStrong", isPasswordStrong('/'));
console.log("suggestsStrongerPasswords", suggestsStrongerPasswords('eklavya'));