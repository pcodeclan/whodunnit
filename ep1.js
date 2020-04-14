//Episode 1
const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

//Output: Miss Scarlet. Because anonymous function assinged to the const variable declareMurderer returns the murderer key which in this case is "Miss Scarlet"
