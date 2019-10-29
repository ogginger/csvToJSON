//csvToJSON_csv_ReturnsJSON.js: Testing logic.

define([
	"csvToJSON"
], function(
	csvToJSON
) {
	return {
		"Name":"csvToJSON_csv_ReturnsJSON",
		"Input": "h1,h2\nd1,d2",
		"Function": csvToJSON,
		"ExpectedOutput": [{ "h1": "d1", "h2": "d2" }],
		"Comparator": {
			"Object": true
		},
		"Debug": false
	};
});
