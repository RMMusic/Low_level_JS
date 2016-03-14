/**
 * Created by admin on 09.03.2016.
 */
$( document ).ready(function() {

    $('body').append("<p style='font-size: 24pt'>.ready()<p>");

    $('.backgroundImage1').on('click', function( event ) {
        event.preventDefault();
        $(this).toggleClass('backgroundImage2');
    });

    //$('#clickS').on('click', function() {
    //    $(this).attr('src',"4.jpg");
    //});

    $("#clickS").mousedown(function(){
        $(this).attr('src',"4.jpg");
    }).mouseup(function(){
        $(this).attr('src',"3.jpg");
    });

    $( "#target" ).on('keydown', function() {
        $(this).css({background: "#97F9A7"});
        $('body').append("<p style='font-size: 24pt'>Background color changed<p>");
    });

    //Ask a question about this shit
    $("span.text").hover(
        function () {
            $(this).toggleClass('blue');
        },
        function () {
            $(this).toggleClass('blue');
        }
    );
    $("span#hover").hover(
        function () {
            $(this).css({color: "red"});
        },
        function () {
            $(this).css({color: ""});
        }
    );
    //end of shit

    $('#odd').on('click', function() {
        $(this).toggleClass('pushed');
        $('table.tableStyle').toggleClass('odd');
    });
    $('#even').on('click', function() {
        $(this).toggleClass('pushed');
        $('table.tableStyle').toggleClass('even');
    });

});