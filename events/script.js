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

    function init() {$('.checkbox').on('click', function(){
        if($(this).is(':checked'))
            $(this).parent().parent().toggleClass('line');  // checked
        else
            $(this).parent().parent().toggleClass('line');  // unchecked
    });}

    var size = 5;
    var table = "<table class='tableStyle'>";
    for (x=1; x<=size; x++) {
        table += "<tr id='"+x+"'>";
        for (y=1; y<=size; y++) table += ("<td x='"+x+"' y='"+y+"'>"+ ((y == 1 )?'<input type="checkbox" class="checkbox">':'') +"</td>");
        table += ("</tr>");
    }
    table += ("</table>");
    $('#table').html(table).promise().done(function(){
        init();
    });

});