$( document ).ready(function() {
    
        var myProxy = 'https://young-eyrie-53521.herokuapp.com/';
        var apiKey = "33B33F41297C2D84D2FEECC4B92F327C";
       //var steamid = "76561198439925662";
        var steamid = $('.singleUsersZone').attr('id');
        var appId = "730"; // counter strike;
        $.ajax({
            url: myProxy + "https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2/?key=" + apiKey + "&steamid=" + steamid + "&appid=" + appId,
            success: function(result){
                console.log(result);
                $("#daneGracza").html('<p>Kills: '+ result.playerstats.stats.find(item => item.name==="total_kills").value 
                + '</p>' + '<p>Deaths: '+ result.playerstats.stats.find(item => item.name==="total_deaths").value + '</p>'
                + '<p>K/D ratio: '+ result.playerstats.stats.find(item => item.name==="total_kills").value
                 /  result.playerstats.stats.find(item => item.name==="total_deaths").value + '</p>');
          }});
    
});