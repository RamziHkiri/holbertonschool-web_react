var student1 = {
  firstName: "Ali",
  lastName: "Khan",
  age: 20,
  location: "New York",
};
var student2 = {
  firstName: "Debbie",
  lastName: "Smith",
  age: 22,
  location: "London",
};
var studentsList = [student1, student2];
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