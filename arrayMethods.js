let stuff = ["A", "B", "C", "D", "E", "F"]; // test array
// Useful array methods
stuff.pop(); // removes the last item in the array (returns what was removed)
//stuff = ['A', 'B', 'C', 'D', 'E']
//return: ['F']
stuff.shift(); // removes the first item in the array (returns what was removed)
//stuff = ['B', 'C', 'D', 'E', 'F']
//return: ['A']
stuff.push("G"); // adds an item to the end of the array (returns the new length of the array)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
//return: 7
stuff.unshift("Z"); // adds an item to the beginning of the array (returns the new length of the array)
//stuff = ['Z', 'A', 'B', 'C', 'D', 'E', 'F']
//return: 7
stuff.indexOf("C"); // returns the index number of the item in the array
//return: 2
stuff.splice(2); // gets rid of the index item and after it (returns what was removed)
//stuff = ['A', 'B']
//return: ['C', 'D', 'E', 'F']
stuff.splice(2, 2); // second argument determines how many items are removed in total (including index) (returns what was removed)
//stuff = ['A', 'B', 'E', 'F']
//return: ['C', 'D']
stuff.splice(2, 0, "Hello"); // inserts item "hello" into index number 2 and shifts other items ahead (removing 0 items) (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'C', 'D', 'E', 'F']
//return: []
stuff.splice(2, 3, "Hello"); // removes 3 items (including index number 2 and after) and inserts "hello" into index number 2 (returns what was removed)
//stuff = ['A', 'B', 'Hello', 'F']
//return: ['C', 'D', 'E']
stuff.slice(2); // same as splice but doesn't modify the original array (returns what would be removed)
//stuff = ['A', 'B', 'C', 'D', 'E', 'F']
//return: ['C', 'D', 'E', 'F']
stuff.concat(["G", "H", "I"]); // returns the combination of array "stuff" with the array argument
//return: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
stuff.toString(); // returns the combination of elements of the array into a string
//return: "A,B,C,D,E,F"
stuff.join("-"); // works the same as toString() but the argument determines what is between each element in the string
//return: "A-B-C-D-E-F"
stuff.reverse(); // reverses an array's elements (returns same thing)
//stuff = ['F', 'E', 'D', 'C', 'B', 'A']