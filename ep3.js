// Episode 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//Output: The first verdict will be Mrs Peacock and the second will be Professor Plum. Because for the firstVerdict, we have assinged that to declareMurderer function which is Mrs Peacock.
