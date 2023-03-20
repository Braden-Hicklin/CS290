function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
  
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
  var url="";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName("Data");

  ws.appendRow([
    formObject.Name,
    formObject.Type,
    formObject.str,
    formObject.dex,
    formObject.con,
    formObject.int,
    formObject.wis,
    formObject.chr,
    formObject.hp,
    formObject.dc,
    formObject.ac,
    formObject.weapon,
    formObject.skills

  ]);
}