var tableData = data;
// function call table
function tableDisplay(ufoSightings) {
    var tbody = d3.select("tbody");
    ufoSightings.forEach((ufoRecord) => {
      var row = tbody.append("tr");
      Object.entries(ufoRecord).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  // function to clear data
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
  // int display of data
  console.log(tableData);
  tableDisplay(tableData);
  // button to filter table
  var button = d3.select("#filter-btn");
  // display and filter database
  button.on("click", function(event) {
    d3.event.preventDefault();
    deleteTbody();
    var dateInput = d3.select("#datetime").property("value");
        if (dateInput.trim() === "" ) {
      // show all of the data if filter has no data
      var filteredData = tableData;
    } else {
      var filteredData = tableData.filter(ufoSighting => 
        ufoSighting.datetime === dateInput.trim());
    };
      // message display if no records
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records with that date</h4>");
    };
  
    console.log(filteredData);
    tableDisplay(filteredData);
  });
Collapse



