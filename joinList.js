/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
// ...

const joinList = function (contents) {
  let concepts = ''
  for (let i = 0; i < contents.length; i++) {
    concepts +=  contents[i] + ',' + ' '
  }
  lastCharRemoved = concepts.slice(0, concepts.length - 2);
  return lastCharRemoved
};


/* pesudo
declare a variable concepts, its an empty string where we will store the string
iterate through the array with a for loop
with each loop add the array element[i] to the variable concepts += element[i]
*/
// Test / Driver Code below...

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
//const concepts = joinList(conceptList);
//console.log(`Today I learned about ${concepts}.`);
console.log(joinList(conceptList));