var moves = 20;
var gold = 0;
var gain = [0];
var losses = [0];
var events =[];
var click = -1;

var chance = 0;
var totalgained = 0;
var totalloss = 0;

var count = 10;
var startingnum = 1;
function init(){
  imgObj = document.getElementById('ninja');
  imgObj.style.position= 'absolute';
  move_img();
}

function move_img(locations){
  switch (locations){
    case "cave":
      document.getElementById('ninja').style.left = 350 + "px";
      document.getElementById('ninja').style.top = 185 +"px";
      gold +=5;
      gain.push(5);
      $("#gold").css({"background-color": "#47d147" , "color": "white"});
      $("#gold").val(gold); 
      alert("your ninja has gained 5 gold." );
      --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
     
      events.push({location: "cave", time: new Date().toLocaleString(), golds:5});
      click +=  1;
      gamelog();
      
      }
  
  totalgained = gain.reduce(getTotalgained);
  $("#total-gains").val(totalgained);
    status();

    break;

    case "house":
      document.getElementById('ninja').style.left = 650 + "px";
      document.getElementById('ninja').style.top = 185 +"px";
      chance = Math.floor((Math.random() * count) + startingnum);
        if (chance >2) {
          gold += 10;
          gain.push(10);
          $("#gold").css({"background-color": "#47d147" , "color": "white"});
          $("#gold").val(gold); 
          --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
      }
          alert("your ninja has gained 10 gold." );
        } else{
          $("#gold").css({"background-color": "#000000" , "color": "white"});
          alert("your ninja gained nothing :(" );
          --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
      }
      events.push({location: "house", time: new Date().toLocaleString(), golds:10});
      click +=  1;
      gamelog();
      }
      totalgained = gain.reduce(getTotalgained);
  $("#total-gains").val(totalgained);
    status();
      
    status();
    break;

    case "goldmine":
      document.getElementById('ninja').style.left = 350 + "px";
      document.getElementById('ninja').style.top = 400 +"px";
      chance = Math.floor((Math.random() * count) + startingnum);
      goldearned = Math.floor((Math.random() * 25) + 1);  
      if (chance >2) {
          gold += goldearned;
          gain.push(goldearned);
          $("#gold").css({"background-color": "#47d147" , "color": "white"});
          $("#gold").val(gold); 
          --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
      }
          alert("your ninja has gained " + goldearned + " gold." );
        } else{
          $("#gold").css({"background-color": "#000000" , "color": "white"});
          alert("your ninja gained nothing :(" );
        --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
      }
      events.push({location: "goldmine", time: new Date().toLocaleString(), golds:goldearned});
      click +=  1;
      gamelog();
      }
      totalgained = gain.reduce(getTotalgained);
  $("#total-gains").val(totalgained);
    status();
    break;

    case "casino":
      document.getElementById('ninja').style.left = 650 + "px";
      document.getElementById('ninja').style.top = 400 +"px";
      var min = 40;
      var max = 50;
      chance = Math.floor((Math.random() * count) + startingnum);
      goldearned = Math.floor(Math.random() * (50 - 40 + 1) + 40);  
      if (chance >5) {
          gold += goldearned;
          gain.push(goldearned);
  
          $("#gold").css({"background-color": "#47d147" , "color": "white"});
          $("#gold").val(gold); 
          --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
      }
          alert("your ninja has gained " + goldearned + " gold." );
        } else{
          gold -= goldearned;
          losses.push(goldearned);

          $("#gold").val(gold);
          $("#gold").css({"background-color": "red" , "color": "black"});
          alert("your ninja lost " + goldearned + " gold." );
          --moves;
      $("#moves").val(moves);
      if(moves == 0){
        finish();
      }
      events.push({location: "casino", time: new Date().toLocaleString(), golds:goldearned});
      click +=  1;
      gamelog();   
      }
      totalgained = gain.reduce(getTotalgained);
        $("#total-gains").val(totalgained);
        status();
      totalloss = losses.reduce(getTotalgained);
        $("#total-losses").val(totalloss); 
        status();
    break;
}}
    function getTotalgained(totalgold, num){
      return totalgold + num;
    }
    function disablebuttons(){
      $("#cavebutton").attr("disabled",true);
      $("#housebutton").attr("disabled",true);
      $("#goldminebutton").attr("disabled",true);
      $("#casinobutton").attr("disabled",true);
    }

    function status(){
      if (gold>= 250 && moves >0) {
        alert("CONGRATULATIONS!! YOU WON!!!");
        disablebuttons();
      }
    }

    function finish() {
      if(gold >=250){
        alert("CONGRATULATIONS!! YOU WON!!!!");
      }
      else{
        alert("Sad. You lost. Game Over."); 
        if(confirm( "Try Again? Press OK") == true) {
          window.location.href = "index.html";
        }
      }
      disablebuttons();
    }

    function gamelog() {
      if (events[click]["gold"]>0) {
        $("#all").append("<p class = 'win'> Location: "+events[click]['location']+"<br> Time: "+events[click]['time']+ "<br> Golds: "+events[click]['golds']+"</p>");
        $("#wins").append("<p class='win' style ='text-align:left; float:left;'>Location:"+events[click]['location']+"<br> Time: "+events[click]['time']+" <br> Golds: "+events[click]['golds']+"</p>");
      }
      else if(events[click]['gold']<0){
        $("#all").append("<li class = 'lose'> Location: "+events[click]['location']+"<br> Time: "+events[click]['time']+ "<br> Golds: "+events[click]['golds']+"</p>");
        $("#losses").append("<p class='lose' style ='text-align:left; float:left;'>Location:"+events[click]['location']+"<br> Time: "+events[click]['time']+" <br> Golds: "+events[click]['golds']+"</p>");
      }
      else{
        $("#all").append("<p class='nogolds'>Location:"+events[click]['location']+"<br> Time: "+events[click]['time']+" <br> Golds: "+events[click]['golds']+"</p>");
      }
    }
    window.onload =init;  