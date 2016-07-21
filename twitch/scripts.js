
var streamers=["ESL_SC2", "OgamingSC2", "syndicate", "freecodecamp", "riotgames", "Nightblue3", "captainsparklez", "goldglove"];


$(document).ready(function(){

    $.each(streamers, function(index, value) {
        var url = 'https://api.twitch.tv/kraken/streams/' + streamers[index];

        $.getJSON(url, function (data) {
            if(data.stream === null){
                $(".channels").append("<div class='well' style='min-height: 120px'><img src='disconnected.png' style='width: 100px;height: 100px; border-radius: 50%; float: left;'/><button class='btn btn-sm btn-danger xout' style='float: right'>X</button> <h2>" + streamers[index] + " is not currently available</h2><p></p></div>");
            }else {
                var gameP = data.stream.channel['game'];
                var username = data.stream.channel['display_name'];
                var icon = data.stream.channel['logo'];
                $(".channels").append("<div class='well'><img style='width: 100px;height: 100px; border-radius: 50%; float: left' src='" + icon + "'/><button class='btn btn-sm btn-danger xout' style='float: right'>X</button><a href='https://www.twitch.tv/" + username + "'> <h2>" + username + "</h2></a><h3>" + gameP + "</h3><p></p></div>" );

            }}).fail(function(err) {
            $(".channels").append("<div class='well' style='min-height: 120px'><img src='No.png' style='width: 100px;height: 100px; border-radius: 50%; float: left;'/><button class='btn btn-sm btn-danger xout' style='float: right'>X</button> <h2>" + streamers[index] + "  does not exist or has closed their account</h2><p></p></div>");
        });

});


});
$(document).on('click', '.xout', function() {
    $(this).parent().remove();
    console.log("YES");

});
$(document).on('click', '#addBut', function() {
    var user=document.getElementById("addChannel").value;
    console.log(user);
    var url = 'https://api.twitch.tv/kraken/streams/' + document.getElementById("addChannel").value;
    $.getJSON(url, function (data) {
        if (data.stream === null) {
            $(".channels").append("<div class='well' style='min-height: 120px'><img src='disconnected.png' style='width: 100px;height: 100px; border-radius: 50%; float: left;'/><button class='btn btn-sm btn-danger xout' style='float: right'>X</button><h2>" + user + " is not currently available</h2><p></p> </div>");
        }else {
            var gameP = data.stream.channel['game'];
            var username = data.stream.channel['display_name'];
            var icon = data.stream.channel['logo'];
            $(".channels").append("<div class='well'><img style='width: 100px;height: 100px; border-radius: 50%; float: left' src='" + icon + "'/><button class='btn btn-sm btn-danger xout' style='float: right'>X</button><a href='https://www.twitch.tv/" + user + "'> <h2>" + username + "</h2></a><h3>" + gameP + "</h3><p></p> </div>");

        }
    }).fail(function(err) {
        $(".channels").append("<div class='well' style='min-height: 120px'><img src='No.png' style='width: 100px;height: 100px; border-radius: 50%; float: left;'/><button class='btn btn-sm btn-danger xout' style='float: right'>X</button><h2>" + user + " does not exist or has closed thier account</h2><p></p> </div>");
    });

});

