// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-90476750-1', 'auto');
ga('send', 'pageview');

// Contact Form and Modal Display
$(document).ready(function(){
    $("#contactForm").submit(function(event){event.preventDefault();
   	$.ajax({ url: "https://www.enformed.io/lw2o8614", method: "post", dataType: "json",accepts: "application/json", data: $("#contactForm").serialize(),
        success: function(){
	    	$(".modal").show();
	        $("span").click(function() { $(".modal").hide(); });
	        $("#contactForm input").val("");
	    	$("#contactForm textarea").val("");
        },
        error: function(){
          	$(".modal2").show();
	        $("span").click(function() { $(".modal2").hide(); });
        }
      	});
    });
});
// Make dropdown menu disappear when window is clicked. 
$("body").click(
  function () {
    if ($("div #headerNav").hasClass("in")) {
      $("div #headerNav").removeClass("in");
    } else {

    }
  }
);

$(".navbar-brand").mouseenter(
  function () {
    $(".navbar-brand span").show("slow");
  }
  ).mouseleave(
  function () {
    $(".navbar-brand span").hide("slow");
  }
);


