
var streamers=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
var game, id, logo, isOnline;

/*
//stream info
$(document).ready(function(){
   //Free code camp stream info and status call
    var url = "https://api.twitch.tv/kraken/streams/srkevo1";
    $.getJSON(url, function(data1){
        if(data1.stream===null){
            $("#fccstatus").html("Free Code Camp is Currently Offline.");
            console.log("offline");
        }else{
            $("#fccstatus").html("Free Code Camp is Currently Online.");
            console.log("online");
        }
   });
});
*/

$("fccstatus").prepend("<h1>" + "HI" + "</h1>");




$(document).ready(function() {
    for(var i = 0; i < streamers.length; i++){
    var url = 'https://api.twitch.tv/kraken/streams/' + streamers[i];
    var streamer = streamers[i];
   // console.log(streamers[i]);
        //console.log(streamer);
    $.getJSON(url, function(data) {
        console.log(url);
        if(data.stream===null){
            $("#fccstatus").html("Free Code Camp is Currently Offline.");
            $('#appendTest').append( "<div class='well'><h1>" + streamer + " is not Currently Online</h1></div>" );
            console.log("offline");
        }else{
            $("#fccstatus").html("Free Code Camp is Currently Online.");
            console.log("online");
        }
    });
};
});

