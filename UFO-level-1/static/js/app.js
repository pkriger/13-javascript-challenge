// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//  Insert table rows and add table
tableData.forEach(sighting => {
    let newRow = tbody.append("tr");
    Object.values(sighting).forEach(metric => {
        newRow.append("td").text(metric)
    })
})


// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  // clear tabe data
  tbody.text('');
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Use the form input to filter the data by date
  //function filterList () 
  var filterData = tableData.filter((sighting) => 
     sighting.datetime === inputValue);
  console.log(filterData);

  // show only the filtered table
  filterData.forEach(sighting => {
    let newRow = tbody.append("tr");
    Object.values(sighting).forEach(metric => {
        newRow.append("td").text(metric)
    })
  })
};