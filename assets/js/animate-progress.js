var tupo = 0;

$(document).ready(function() {
  $("#brbr").slideUp(0);
  $("#progress").animate({width: "85%" }, 1000, function() {
    $("#background-btn").text("We don't have item you want to buy, but you can pay for it!");
    $("#progress").slideUp(2000, function() {
      $("#progress").text(
        "Pay for it! (click please)"
      ).delay(2000).slideDown(2000, function() {
        $("#progress").click(function() {
          $("#brbr").slideDown(1000);
          $("#progress").slideUp(2000, function() {
            $("#progress").slideDown(2000).text("Upload photos. We'll finish your payment without you.");
            tupo = 1;
          });
          if (tupo == 1) {
            self.location.href="index.html";
          }
        });
      });
    });
  });
});

console.log("anim loaded");
