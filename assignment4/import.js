// Used to flip the direction after each onclick event (highest-lowest to lowest-highest)
let sortDirection = false;

// Manually set dictionary that was originally planned to be automated using cheerio, axios, and express
// More on the original design can be found in app.js and the readme file
let tableData = [
    {gpu: 'RTX 4090', price: 1599, benchmark: 370, compareVal: 0},
    {gpu: 'RX 7900 XTX', price: 1070, benchmark: 256, compareVal: 0},
    {gpu: 'RTX 4070 Ti', price: 820, benchmark: 240, compareVal: 0},
    {gpu: 'RX 7900 XT', price: 880, benchmark: 220, compareVal: 0},
    {gpu: 'RX 6800', price: 580, benchmark: 143, compareVal: 0},
    {gpu: 'RX 6700 XT', price: 480, benchmark: 122, compareVal: 0},
    {gpu: 'RTX 3060 Ti', price: 400, benchmark: 129, compareVal: 0},
    {gpu: 'Arc A770', price: 350, benchmark: 108, compareVal: 0},
    {gpu: 'RX 6650 XT', price: 400, benchmark: 110, compareVal: 0},
    {gpu: 'RTX 3060', price: 330, benchmark: 100, compareVal: 0},
    {gpu: 'RX 6600', price: 330, benchmark: 86, compareVal: 0},
    {gpu: 'RTX 2060', price: 300, benchmark: 89, compareVal: 0},
    {gpu: 'Arc A380', price: 140, benchmark: 38, compareVal: 0}
];

// Initializes the table with the data set on load event
window.onload = () => {
    loadTableData(tableData);
};

// Loads the table using the tableData dictionary
function loadTableData() {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    
    // Loops through the items on the data set and sets the compareVal variable using price/benchmark parsed to a number
    for(let data of tableData) {
        data["compareVal"] = ((data.price/data.benchmark)*100 | 10);
        dataHtml += `<tr><td>${data.gpu}</td><td>${data.price}</td><td>${data.benchmark}</td><td>${data.compareVal}</td></tr>`;
    }
    
    tableBody.innerHTML = dataHtml;
}

// Sorting function 
function sortColumn(columnName) {
    const dataType = typeof tableData[0][columnName];	
    sortDirection = !sortDirection;
    console.log(dataType);
    
    // Swaps the direction of the sort
    switch(dataType) {
        case 'number':
            sortNum(sortDirection, columnName);
            break;
    }

    loadTableData(tableData);
}

// Basic sorting function using in library array sorting command
function sortNum(sort, columnName) {
    tableData = tableData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] -
        p1[columnName]
    });
}

