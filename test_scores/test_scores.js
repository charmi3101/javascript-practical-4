var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function displayResults(){
    var sum=0;
    var count=scores.length;
 for (var i in scores) {
     sum +=scores[i];
 } 
    var average= sum/count;
        $("results").innerHTML = "<h2> Results</h2>";
        $("results").innerHTML += "<p>Average   Score= </p>"+average;
       $("results").innerHTML += "<p>Highest Score=  </P>"+  Math.max(scores[i]);
$("name").focus();

};

function displayScores(){

    var e= "";
      for (var y=0; y<names.length; y++)
   {
     e +=   names[y] + "<br/>";
   }

   var f= " ";
      for (var z=0; z<scores.length; z++)
   {
     f +=   scores[z] + "<br/>";
   }
   $("scores_table").innerHTML = "<h2>Scores</h2>"; 
   $("scores_table").innerHTML += "<tr><th>names: </th><th>scores: </th></tr><td>"+ e + "</td><td>"+ f + "</td>";
   
$("name").focus();
};

function addScore(){
    
  var n1= document.getElementById("name");
  var word = n1.value;
  var m = document.getElementById("score");
  var marks = m.value;    
  if(word ===  "" && marks<0 || marks>100){
    
     alert("You must enter a name and a valid number!");
  }
  else{
   names.push(word); 
   scores.push(marks);  
  }
   $("name").focus();
};
 
window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


