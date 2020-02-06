const organizeInstructors = function(instructors) {
  let organized = {};
  let names = [];
  let courses = [];
  let filteredCourses = [];

  instructors.forEach(x => courses.push(x.course));
  filteredCourses = [...new Set(courses)];
  filteredCourses.forEach(function(x) {
    organized[x] = names;
    instructors.forEach(y => y.course === x ? names.push(y.name) : '');
    names = [];
  });
  return organized;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));