"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

function toFahrenheit(){   
    var x = document.getElementById('degree_label_1');
    var y = document.getElementById('degree_label_2');
    
    if($('to_fahrenheit').checked)
        {
            x.innerHTML="Enter C degrees: ";
            y.innerHTML="Degrees Fahrenheit: ";
        }
   clearTextBoxes(); 
  
};

function toCelsius(){
    var a = document.getElementById('degree_label_1');
    var b = document.getElementById('degree_label_2');
    
    if($('to_celsius').checked)
        {
            a.innerHTML="Enter F degrees: ";
            b.innerHTML="Degrees Celsius: ";
        }
    
     clearTextBoxes(); 
};

 function convertTemp(){
     var num = parseInt($("degrees_entered").value);
     if(isNaN(num))
         {
             alert("Enter valid number!");
         }
    else if($('to_celsius').checked ){
         var celsius= num;
         celsius=(parseFloat(celsius)-32)/1.8;
         $('degrees_computed').value=celsius;
         
     }
     else if($('to_fahrenheit').checked )
         {
             var fahrenheit=num;
             fahrenheit=(parseFloat(fahrenheit)*1.8)+32;
              $('degrees_computed').value=fahrenheit;
         }
 };

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};