
$("document").ready(function(){
    $("#button").click(function (e) { 
        $(".hide").show();
                $("#button").click(function(){
                    $(".hide").hide();
                        $("#button").click(function(){
                            $(".hide").show();
                            $("#button").click(function(){
                                $(".hide").hide();
                                    $("#button").click(function(){
                                        $(".hide").show();
                                    })
                                    $("#button").click(function(){
                                        $(".hide").hide();
                                            $("#button").click(function(){
                                                $(".hide").show();
                                            })
                                            $("#button").click(function(){
                                                $(".hide").hide();
                                                    $("#button").click(function(){
                                                        $(".hide").show();
                                                    })
                                                    $("#button").click(function(){
                                                        $(".hide").hide();
                                                            $("#button").click(function(){
                                                                $(".hide").show();
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                        })
                })
            });
        e.preventDefault();
        
    });


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
