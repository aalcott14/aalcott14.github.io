$(document).ready(function(){
    $("#myCarousel").carousel('pause');

    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });

    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });

    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });

    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });

    $("#car1").click(function(){
        $("#myCarousel").carousel("prev");
    });

    $("#car2").click(function(){
        $("#myCarousel").carousel("next");
    });

    $("#myCarousel2").carousel('pause');

    $(".item1").click(function(){
        $("#myCarousel2").carousel(0);
    });

    $(".item2").click(function(){
        $("#myCarousel2").carousel(1);
    });

    $(".item3").click(function(){
        $("#myCarousel2").carousel(2);
    });

    $(".item4").click(function(){
        $("#myCarousel2").carousel(3);
    });

    $("#car3").click(function(){
        $("#myCarousel2").carousel("prev");
    });

    $("#car4").click(function(){
        $("#myCarousel2").carousel("next");
    });
});
