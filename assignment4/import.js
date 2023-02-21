let sortDirection = false;
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

window.onload = () => {
    loadTableData(tableData);
};

function loadTableData() {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let data of tableData) {
        data["compareVal"] = ((data.price/data.benchmark)*100 | 10);
        dataHtml += `<tr><td>${data.gpu}</td><td>${data.price}</td><td>${data.benchmark}</td><td>${data.compareVal}</td></tr>`;
    }

    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
    const dataType = typeof tableData[0][columnName];	
    sortDirection = !sortDirection;
    console.log(dataType);

    switch(dataType) {
        case 'number':
            sortNum(sortDirection, columnName);
            break;
    }

    loadTableData(tableData);
}

function sortNum(sort, columnName) {
    tableData = tableData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] -
        p1[columnName]
    });
}

