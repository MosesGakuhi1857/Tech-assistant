// Form validation 1

$(document).ready(function(){

    $("#form1").click(function(event1){

        event1.preventDefault();

        // name validation

    var name = $("#customerName").val();

    if (name == ""){
        alert("Please provide your name.")
        return false;
    };

    if(name.length <= 2){
        alert("Please provide a valid name. \nIt has to be longer than 2 characters.")
        return false;
    };

    // text area validation

    var issue = $("#issue").val();

    if(issue.length > 0 && issue.length < 10){
        alert("Please provide a more detailed issue you want to be attended to.")
        return false;
    };

    if(issue == ""){
        alert("Please provide an issue you want to be looked at.")
        return false;
    };

    // location validation

    var location = $("#location").val();

    if(location == ""){
        alert("Please provide your location.")
        return false;
    };

    if(location.length < 10){
        alert("Please provide more information about your location.")
        return false;
    };

    // phone number validation

    var phoneN = $("#phoneNumber").val();

    if (phoneN == ""){
        alert("Please provide your phone number.")
        return false;
    };

    if(phoneN.length < 10 || phoneN.length > 13){
        alert("Please provide a valid phone number.")
        return false;
    };

    });

});

// Form validation 2

$(document).ready(function(){

    $("#form2").click(function(event2){

        event2.preventDefault();

        // name validation

    var name = $("#customerName2").val();

    if (name == ""){
        alert("Please provide your name.")
        return false;
    };

    if(name.length <= 2){
        alert("Please provide a valid name. \nIt has to be longer than 2 characters.")
        return false;
    };

    // text area validation

    var issue = $("#issue2").val();

    if(issue.length > 0 && issue.length < 10){
        alert("Please provide a more detailed issue you want to be attended to.")
        return false;
    };

    if(issue == ""){
        alert("Please provide an issue you want to be looked at.")
        return false;
    };

    // location validation

    var location = $("#location2").val();

    if(location == ""){
        alert("Please provide your location.")
        return false;
    };

    if(location.length < 10){
        alert("Please provide more information about your location.")
        return false;
    };

    // phone number validation

    var phoneN = $("#phoneNumber2").val();

    if (phoneN == ""){
        alert("Please provide your phone number.")
        return false;
    };

    if(phoneN.length < 10 || phoneN.length > 13){
        alert("Please provide a valid phone number.")
        return false;
    };

    });

});
