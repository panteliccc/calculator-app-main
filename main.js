$(document).ready(function(){
    var num = '';
    var rez;
    $('.btt').click(function(){
        num += this.value;
        $('.input').text(num);
    });
    $('.reset').click(function(){
        $('.input').text(0);
        num = '';
    });
    $('.eq').click(function(){
        rez = eval(num)
        $('.input').text(rez);
        num = rez;
    });
    $('.del').click(function(){
        var str = $(".input")[0].innerHTML
        $(".input")[0].innerHTML = str.substr(0, str.length - 1) ;
      
    });
});
