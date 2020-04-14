// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Output: Professor Plum. The if comparator passes and murderer does indeed get changed to Mrs Peacock but because it stays within the block braces being a let murderer, it does not change from Professor Plum which is module scoped.
