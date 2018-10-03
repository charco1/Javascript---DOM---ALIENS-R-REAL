// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableArea = d3.select("tbody");

function printAll() {
    tableData.forEach(function(row) {
        tableRow = tableArea.append("tr");
        tableRow.append("td").text(row.datetime);
        tableRow.append("td").text(row.city);
        tableRow.append("td").text(row.state);
        tableRow.append("td").text(row.country);
        tableRow.append("td").text(row.shape);
        tableRow.append("td").text(row.durationMinutes);
        tableRow.append("td").text(row.comments);
    })
};
printAll();

//Filter Table
function filterTable(e) {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Get the value property of the input element
    var filterInput = d3.select("#datetime").node().value;
    var filterList = tableData.filter(function(row) {
        if (filterInput = row.date) {
            return true
        } else {
            return false
        }
    });
    console.log(filterList);
};

var filterBtn = document.getElementById("filter-btn")
filterBtn.addEventListener("click", filterTable);

//Filter Table
function filterTable(e) {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Get the value property of the input element
    var filterInput = d3.select("#city").node().value;
    var filterList = tableData.filter(function(row) {
        if (filterInput = row.date) {
            return true
        } else {
            return false
        }
    });
    console.log(filterList);
};

var filterBtn = document.getElementById("filter-btn")
filterBtn.addEventListener("click", filterTable);

//Filter Table
function filterTable(e) {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Get the value property of the input element
    var filterInput = d3.select("#state").node().value;
    var filterList = tableData.filter(function(row) {
        if (filterInput = row.date) {
            return true
        } else {
            return false
        }
    });
    console.log(filterList);
};

var filterBtn = document.getElementById("filter-btn")
filterBtn.addEventListener("click", filterTable);

//Filter Table
function filterTable(e) {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Get the value property of the input element
    var filterInput = d3.select("#country").node().value;
    var filterList = tableData.filter(function(row) {
        if (filterInput = row.date) {
            return true
        } else {
            return false
        }
    });
    console.log(filterList);
};

var filterBtn = document.getElementById("filter-btn")
filterBtn.addEventListener("click", filterTable);

//Filter Table
function filterTable(e) {
    
    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Get the value property of the input element
    var filterInput = d3.select("#shape").node().value;
    var filterList = tableData.filter(function(row) {
        if (filterInput = row.date) {
            return true
        } else {
            return false
        }
    });
    console.log(filterList);
};

var filterBtn = document.getElementById("filter-btn")
filterBtn.addEventListener("click", filterTable);