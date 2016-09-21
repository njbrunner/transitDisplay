/*function refresh() {
    "use strict";
    $.ajax({
        type: 'get',
        url: "script2.py",
        success: function(response) {
            console.log(response);
        },
        error: function(request, status, error) {
            console.log("Request: " + request);
            console.log("Status: " + status);
            console.log("Error: " + error);
        }
    });
}*/

var url = 'https://api.uber.com/v1/products?latitude=37.625732&longitude=-122.377807&server_token=03Dg2jKKnyUNkxl43W2DVk0STqWl_rid6qA5MsX-';

$.getJSON(url, function(data) {
    console.log(data);
});