//csvToJSON_csvHasEmptyDataPoints_ReturnsJSON.js: Testing logic.

define([
	"csvToJSON"
], function(
	csvToJSON
) {
	return {
		"Name":"csvToJSON_csvHasEmptyDataPoints_ReturnsJSON",
		"Input": "h1,h2\nd1,d2\nd3,",
		"Function": csvToJSON,
		"ExpectedOutput": [{ "h1": "d1", "h2": "d2" }, { "h1": "d3", "h2": "" }],
		"Comparator": {
			"Object": true
		},
		"Debug": true
	};
});
