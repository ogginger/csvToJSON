//test_csvToJSON.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "csvToJSON",
  "tests/csvToJSON_csv_ReturnsJSON",
  "tests/csvToJSON_csvHasEmptyDataPoints_ReturnsJSON"
], function(
  TestSuite,
  log,
  csvToJSON,
  csvToJSON_csv_ReturnsJSON,
  csvToJSON_csvHasEmptyDataPoints_ReturnsJSON
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_csvToJSON initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "csvToJSON" );
        xTestSuite.add( csvToJSON_csv_ReturnsJSON );
        xTestSuite.add( csvToJSON_csvHasEmptyDataPoints_ReturnsJSON );
      xTestSuite.test();
    }
  });
});
