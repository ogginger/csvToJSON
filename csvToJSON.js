//csvToJSON.js: Functional Logic.

define([], function() {
  return function( Input ) {
    var sLines = Input.split("\n");
    var sHeaders = sLines[0].split(",");
    var sData = sLines.splice(1);
    var JSON_Array = [];
    var Return_JSON = {};
    sData.forEach(function( sLine ) {
      var sDataPoints = sLine.split(",");
      var json = {};
      sDataPoints.forEach(function( sDataPoint, nIndex ) {
        json[sHeaders[nIndex]] = sDataPoint;
      });
      JSON_Array.push( json );
    });
    Return_JSON = JSON.stringify( JSON_Array );
    return JSON.parse( Return_JSON );
  };
});
