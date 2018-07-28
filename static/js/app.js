// importing data
var tableData = data;
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");


submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Reset table to remove previous results
    tbody.html(" ");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
//     //--------------------------------
//
//     
//     var inputDate = d3.select("#datetime");
//     var dateValue = inputDate.property("value");

//     var inputCity = d3.select("#city");
//     var cityValue = inputCity.property("value");

//     var inputState = d3.select("#state");
//     var stateValue = inputState.property("value");

//     var inputCountry = d3.select("#country");
//     var countryValue = inputCountry.property("value");

//     var inputShape = d3.select("#shape");
//     var shapeValue = inputShape.property("value");


//     var filteredData = consdata.filter(function(d) 
// { 
//     // Replace || with &&
//         if( d["Date"] === dateValue) || (d["City"]=== cityValue || d["State"]=== stateValue || d["Country"]=== countryValue || d["Shape"]=== shapeValue )
//         { 
//             return d;
//         } 

//     })

//     //------------------------------------

    console.log(filteredData);
    
    //console.log(typeof filteredData);
    filteredData.forEach((ufoReport) => {
    //add new row for each object
    var row = tbody.append("tr");
    // new col for each key value
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      //write values to table
      cell.text(value);
        });
    });

});

// NEED TO CLEAR TABLE OF OLD RESULTS WITH BUTTON CLICK