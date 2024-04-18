interface Student  {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
var student1 = {
  firstName: "Ramzi",
  lastName: "hkiri",
  age: 29,
  location: "tunisia",
};
var student2 = {
  firstName: "samir",
  lastName: "derouich",
  age: 26,
  location: "bizerte",
};
var studentsList : Array<Student> = [student1, student2];
document.addEventListener("DOMContentLoaded", function () {
  var table = document.createElement("table");
  var headerRow = table.insertRow();
  var headerNames = ["First Name", "Location"];
  headerNames.forEach(function (name) {
      var th = document.createElement("th");
      th.textContent = name;
      headerRow.appendChild(th);
  });
  studentsList.forEach(function (student) {
      var row = table.insertRow();
      var cellFirstName = row.insertCell();
      var cellLocation = row.insertCell();
      cellFirstName.textContent = student.firstName;
      cellLocation.textContent = student.location;
  });
  document.body.appendChild(table);
});