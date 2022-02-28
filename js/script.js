document.addEventListener("DOMContentLoaded", function () {
  var databyname = document.getElementById("databyname");

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var name,
        model,
        manufacturer,
        length,
        crew,
        passengers,
        created,
        edited,
        url,
        result = "";
      var test = JSON.parse(this.responseText);
      var data = test.results;
      console.log("test", test);
      console.log("data", data);
      result +=
        "<table border='1'><tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Length</th><th>Crew</th><th>Passengers</th><th>Created</th><th>Edited</th><th>Url</th></tr>";
      for (let i = 0; i < data.length; i++) {
        name = data[i].name;
        model = data[i].model;
        manufacturer = data[i].manufacturer;
        length = data[i].length;
        crew = data[i].crew;
        passengers = data[i].passengers;
        created = data[i].created;
        edited = data[i].edited;
        url = data[i].url;
        result +=
          "<tr><td>" +
          name +
          "</td><td>" +
          model +
          "</td><td>" +
          manufacturer +
          "</td> <td>" +
          length +
          "</td>" +
          "<td>" +
          crew +
          "</td>" +
          "<td>" +
          passengers +
          "</td><td>" +
          edited +
          "</td>" +
          "<td>" +
          created +
          "</td><td>" +
          url +
          "</td> </tr>";
      }
      result += "</table>";
      databyname.innerHTML = result;
      console.log("data", data);
    }
  };
  xhttp.open("GET", `https://swapi.dev/api/starships/`, true);
  xhttp.send();
});
