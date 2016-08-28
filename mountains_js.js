var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function buildTable(data) {
  var retString = "";
  //document.body.push( "<table>" );
  retString += "<table>";
    retString += "<tr>";
    for( var fieldName in data[0] ){
      //document.body.push( "<th>" + fieldName + "</th>" );
      retString += "<th>" + fieldName + "</th>";
    }
    retString += "<tr>";
    retString += "\n";

    for( var line in data ){
      retString += "<tr>";
      for( var memberName in data[line]){
        //document.body.push( "<td>" + line[fieldName] + "</td>" );
        retString += "<td>" + data[line][memberName] + "</td>"
      }
      retString += "</tr>";
      retString += "\n";
    }
  //document.body.push( "</table>" );
  retString += "</table>";
  console.log( retString );
  //retNode = document.createTextNode(retString);
  //return retNode;
}
buildTable(MOUNTAINS);
