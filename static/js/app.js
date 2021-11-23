// import the data from data.js
const tableData = data;

// Reference the HTML table usindg d3
var tbody = d3.select("tbody");

//build table
function buildTable(data) {
   // clear any existing data from table
    tbody.html("");
    //Loop through each object in the data and append row and cells for each value in the row
    data.forEach((dataRow) => {
        // find <tbody> tag w/n HTML & add a table row "tr"  <tr> is table row
        let row = tbody.append("tr"); 
        //Loop through and put each sighting onto its own row of data. val is each item
        Object.values(dataRow).forEach((val) => { 
            // td is table data <td> is html tag
            let cell = row.append("td"); 
            // extract only the text of the value
            cell.text(val);  
            }
        );
    });
};