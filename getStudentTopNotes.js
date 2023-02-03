/*
Create a function that takes an array of students and returns an array of their top notes. If the student does not have notes then let's assume their top note is equal to 0.
Examples

getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]) ➞ [5, 5, 4]
*/

function getStudentTopNotes(students) {
	//create empty result array
  let result = [];
  //iterate students array
  for (var i = 0; i < students.length; i++) {
    //create current student variable
    let currentStudent = students[i];
    //create highest variable
    let highest = currentStudent['notes'][0];
    //iterate notes array
    for (var j = 0; j < currentStudent['notes'].length; j++) {
      //if current note > highest, update highest variable
      if (highest < currentStudent['notes'][j]) {
        //update highest with current student note
        highest = currentStudent['notes'][j];
      }
      //update result with highest note of current student
    }
    result.push(highest);
  }
  //return result
  return result;
}
console.log(getStudentTopNotes([
  {
    id: 1,
    name: "Jacek",
    notes: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    notes: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    notes: [2, 2, 4, 4, 3, 3]
  }
]));