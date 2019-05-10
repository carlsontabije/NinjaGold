    $(document).ready(function(){
      $(".find").click(function() {
        var value = parseInt($(".tries").text()) - 1;    
        $(".tries").text(value); 
        if (value <= 0){
            alert("game over");
        }
    });
});
$(document).on("click","#cave", function(){
    gold= parseInt($("#gold").text()) +5;
    $("#gold").text(gold);
      alert("you gained 5 gold!");
  });

var gold;
$(document).on("click", "#house", function() {
    
    var number = Math.random();
    if (number < 0.8) {
    gold= parseInt($("#gold").text()) +10;
    $("#gold").text(gold);
      alert("You gained "+ gold +" gold");
    } else {
      alert("You gained nothing :(");
    }
    });
  
var gold;
    $(document).on("click", "#goldmine", function() {
        var number = Math.random();   
        if (number < 0.8) {
        var min = 1; 
        var max = 25; 
        var gold = Math.floor(Math.random() * (max - min + 1) + min);
        alert("You gained " +gold + " coins"); 
        gold= parseInt($("#gold").text()) +gold;
        $("#gold").text(gold);  
        } else {
        alert("You gained nothing :(");
        }
    });

var gold;
$(document).on("click", "#casino", function() {
    var number = Math.random();
      if (number < 0.5) {
        var min = 40; 
        var max = 50;
        var gold = Math.floor(Math.random() * (max - min + 1) + min);
        alert("You gained " + gold + " gold");
        gold= parseInt($("#gold").text()) +gold;
        $("#gold").text(gold);
      } else {
        var min = 40; 
        var max = 50;
        var gold = Math.floor(Math.random() * (max - min + 1) + min);
        alert("You lost " + gold + " gold");
        gold= parseInt($("#gold").text()) -gold;
        $("#gold").text(gold);
      }
    });  