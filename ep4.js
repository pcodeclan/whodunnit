// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//Output: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard - because declareAllSuspects changes suspectThree to Colonel Mustard.
//Suspect three is Mrs Peacock - Suspect three is unchanged since ket suspectThree is block scoped.
