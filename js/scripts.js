$(document).ready(function() {
  
  $("h3.japan").click(function() {
   $("ul.japan").show();
  $("ul.japan").append("<li>" + Japan.dateOfTravel + "</li>");
  $("ul.japan").append("<li>" + Japan.season + "</li>");
  $("ul.japan").append("<li>" + Japan.landmarks + "</li>");
  $("ul.japan").append("<li>" + Japan.notes + "</li>");
  });
  
    $("h3.israel").click(function(){
    $("ul.israel").show();
  $("ul.israel").append("<li>" +  Israel.dateOfTravel + "</li>");
  $("ul.israel").append("<li>" + Israel.season + "</li>");
  $("ul.israel").append("<li>" + Israel.landmarks + "</li>");
  $("ul.israel").append("<li>" + Israel.notes + "</li>"); 
    });

  $("h3.peru").click(function(){
  $("ul.peru").show();
  $("ul.peru").append("<li>" +  Peru.dateOfTravel + "</li>");
  $("ul.peru").append("<li>" + Peru.season + "</li>");
  $("ul.peru").append("<li>" + Peru.landmarks + "</li>");
  $("ul.peru").append("<li>" + Peru.notes + "</li>"); 
  });
});


//business logic
//constructor for destinations
function Destinations(location, dateOfTravel, season, landmarks, notes) {
  this.location = location;
  this.dateOfTravel = dateOfTravel;
  this.season = season;
  this.landmarks = landmarks;
  this.notes = notes;
}

//Location.prototype.countryName = function(){
  //return this.countryName 
  //console.log(countryName);



//Japan (properties=location, landmarks, time of year,notes)
 let Japan = new Destinations (" Japan"," 03/2017", " Spring", " Mt.Fuji", [" Udon in Tokushima is Amazing!", " Okonomiyaki in Osaka is so good!", " Kyoto is incredibly beautiful!"] )



//Israel
let Israel = new Destinations (" Israel", " 09/2019", " Fall", " Dead Sea", [" Jerusalem is amazing", " The Judean desert is so beautiful", " Malawach is so delicious"]);




//Peru
let Peru = new Destinations (" Peru", " 11/2018", " Winter", " Sasquaywaman", [" Peru is so culturally rich and beautiful!", " I love the Sacred Valley and cusco!"]);
   