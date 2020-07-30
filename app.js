
$(document).ready(function() {

    var team1 = $("#sports #one").text();
    var team2 = $("#sports #two").text();
    var team3 = $("#sports #three").text();
    $("#team1").click(function() {
        var confirmIt = confirm("Are you sure you want to delete team: " + team1 + ", 1243?");
        if(confirmIt == true) {
            // delete table
            $("#firstTeam").remove();
        }
        else {
            // do nothing
        }
    });

    $("#team2").click(function() {
        var confirmDelete = confirm("Are you sure you want to delete team: " + team2 + ", 2763?");
        if(confirmDelete == true) {
            $("#secondTeam").remove();
        }
        else {
            // do nothing
        }
    });

    $("#team3").click(function() {
        var deleteConfirm = confirm("Are you sure you want to delete team " + team3 + ", 8796?");
        if(deleteConfirm == true) {
            $("#thirdTeam").remove();
        }
    });
    
    $(function () {
        $('[data-toggle="popover"]').popover()
      });
});