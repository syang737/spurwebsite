// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var q1 = parseInt(getParameterByName('q1'), 10);
var q2 = parseInt(getParameterByName('q2'), 10);
var avg = (q1 + q2) / 2;


$(document).ready(function(){
	console.log(avg);
	$('#score').text(avg);
});