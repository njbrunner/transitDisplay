//service input
var lat = "38.899020";
var lng = "-77.003519";
var url = 'https://api.uber.com/v1/products?latitude=37.625732&longitude=-122.377807';//&server_token=03Dg2jKKnyUNkxl43W2DVk0STqWl_rid6qA5MsX-';
var token = "03Dg2jKKnyUNkxl43W2DVk0STqWl_rid6qA5MsX-";
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.setRequestHeader("Authorization", "Token " + token);
xhr.send();

function refresh() {
    "use strict";
    document.getElementById("closestUber").innerHTML = xhr.responseText;
    console.log(xhr.readyState);
    console.log(xhr.statusText);
    console.log(xhr.status);
    console.log(xhr.responseText);
}

*/

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'https://api.uber.com/v1/products?latitude=37.625732&longitude=-122.377807&server_token=03Dg2jKKnyUNkxl43W2DVk0STqWl_rid6qA5MsX-';

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

makeCorsRequest();