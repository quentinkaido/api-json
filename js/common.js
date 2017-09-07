/* We create an app variable to avoid having to write a long
document.getElementById… everytime.
The HTML div with id="application" is the core of our software */
var app = document.getElementById("application");

// Function to display all the people
var showPeople = function() {
  // First, we empty the app's HTML
  app.innerHTML = "";
  // Then we display a card for each people
  people.forEach(function(person,index) {
    // We prepare the whole HTML code in a variable called personCard
    personCard = "<div class='col-lg-3 col-md-4 col-xs-6'>"; // Begin of column
    personCard += "<div class='panel panel-default'>"; // Begin of panel
    // Panel title: person's name and driving licence
    personCard += "<div class='panel-heading'><h1 class='panel-title'>" + person.name;
    if (person.drivinglicence) {
      personCard += "&nbsp;<span class='label label-success'>permis B</span>";
    }
    personCard += "</h1></div>";
    // Panel body : person's age and contact/edition/suppression buttons
    personCard += "<div class='panel-body'>";
    personCard += "<div class='alert alert-info'>" + person.age + "&nbsp;ans</div>";
    personCard += "<div class='btn-group'>"; // Begin of buttons group
    // Mailto button : email set in href attribute
    personCard += "<a class='btn btn-info' href='mailto:" + person.email +"'>Contacter</a>";
    // Edit button: index (it's the current position in the people table) is given as GET param
    personCard += "<a class='btn btn-warning' href='edit.html?id=" + index + "'>Éditer</a>";
    // Delete button: index (it's the current position in the people table) is given as GET param
    personCard += "<a class='btn btn-danger' href='delete.html?id=" + index + "'>Supprimer</a>";
    personCard += "</div>" // End of buttons group
    personCard += "</div>"; // End of panel
    personCard += "</div>"; // End of column
    // Card is ready : we add it to the app's HTML
    app.innerHTML += personCard;
});
}

var printInfo = function() {
  // Display the number of people in the navbar
  document.getElementById("infoZone").innerHTML = "&nbsp;Il y a " + people.length + " personnes en base";
  // Display the number of people in the app's div
  app.innerHTML = "&nbsp;Il y a " + people.length + " personnes en base";
}
// Whatever happens, we launch printInfo() everytime
printInfo();
