$(document).ready(function() {
    $('#button1').click(function() {
        var x = $('#text1').val();
        var y = $('#text2').val();
        $.get('http://localhost:8000/Calculate/' + x + '/' + y, function(data, status) {
            $('#result').html(data.result);
        });
    });
    $('#button2').click(function() {
        var x = $('#text1').val();
        var y = $('#text2').val();
        $.get('http://localhost:8000/Calculate1/' + x + '/' + y, function(data, status) {
            $('#result').html(data.result);
        });
    });
    $('#button3').click(function() {
        var x = $('#text1').val();
        var y = $('#text2').val();
        $.get('http://localhost:8000/Calculate2/' + x + '/' + y, function(data, status) {
            $('#result').html(data.result);
        });
    });
    $('#button4').click(function() {
        var x = $('#text1').val();
        var y = $('#text2').val();
        $.get('http://localhost:8000/Calculate3/' + x + '/' + y, function(data, status) {
            $('#result').html(data.result);
        });
    });
});
