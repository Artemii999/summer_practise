var fullDateTime = new Date(); 
var getNormalDate = function(date){ 
var day = date.getDate();
if (day<10) day = '0' + day; 
var month = date.getMonth() + 1;
if (month<10) month = '0' + month; 
var year = date.getFullYear(); 
return day + '.' + month + '.' + year; 
}; 
document.getElementById('date_real').value = getNormalDate(fullDateTime);

var fullDateTime = new Date(); 
var getNormalDate = function(date){ 
var day = date.getDate() + 1;
if (day<10) day = '0' + day; 
var month = date.getMonth() + 1;
if (month<10) month = '0' + month; 
var year = date.getFullYear(); 
return day + '.' + month + '.' + year; 
}; 
document.getElementById('date_tomorrow').value = getNormalDate(fullDateTime);