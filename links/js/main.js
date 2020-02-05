$(document).ready(function() {


    $("#opennav").click(function() {
        $("#overlay").attr("style", "width:100%");
        $("#mySidenav").attr("style", "width:300px");
    });

    $("#overlay").click(function() {
        $("#mySidenav").attr("style", "width:0");
        $("#overlay").attr("style", "width:0");
    });
});