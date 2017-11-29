/**
 * Created by Gosha on 28.11.2017.
 */

var TableTitle = ["Equantion", "First root","Second root"];
var TableValue = [ ];



function solve() {
    var coefA = document.getElementsByName("A")[0].value.toString();
    var coefB = document.getElementsByName("B")[0].value.toString();
    var coefC = document.getElementsByName("C")[0].value.toString();

    if (isNaN(coefA)||isNaN(coefB)||isNaN(coefC)) {    //Валидация
        alert( "Wrong coefficient" );
    }else {
        if (coefA == "") coefA = 0;
        if (coefB == "") coefB = 0;
        if (coefC == "") coefC = 0;

        var textf = document.getElementById("textfield");
        textf.innerHTML = "Debug: "+coefA +coefB +coefC;

        var xhr = new XMLHttpRequest();
        xhr.open('Post', 'Solver', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('A='+encodeURIComponent(coefA)+'&B='+encodeURIComponent(coefB)+'&C='+encodeURIComponent(coefC));

        var table = document.getElementById("table")

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                TableValue.push([""+coefA+" x<sup>2</sup> + "+coefB+" x + "+coefC+" = 0",1,2])
                rePrintTable();
                table.innerHTML =  table.innerHTML + "<tr><td>"+coefA+" x<sup>2</sup> + "+coefB+" x + "+coefC+" = 0</td>"+xhr.responseText+"</tr>";
            }
        }
    }
}


function rePrintTable(){
    $(".mytable").remove();
    //Данные

//Создадим структуру
    var mytable = $('<table/>',{
        class:'mytable'
    }).append(
        $('<thead/>'),
        $('<tfoot/>'),
        $('<tbody/>')
    );
//Наполняем табличку
//Заголовок
    var TitleCell = $('<tr/>');
    $.each(TableTitle,function( myIndex, myData ) {
        TitleCell.append(
            $('<th/>',{
                text:myData
            })
        );
    });
    $("thead",mytable).append(TitleCell);
//Данные
    $.each(TableValue,function() {
        //Переопределяем строку
        var DataCell = $('<tr/>');
        //Пробегаемся по ячейкам
        $.each(this,function() {
            DataCell.append(
                $('<td/>',{
                    html:this
                })
            );
        });
        $("tbody",mytable).append(DataCell);
    });
//Без цикла (не обязательно)
  /*  $.each(TableValue,function( i, myData ) {
        $("tbody",mytable).append(
            $('<tr/>').append(
                $('<td/>',{text:myData[0]}),
                $('<td/>',{text:myData[1]}),
                $('<td/>',{text:myData[2]}) //Или так
            )
        );
    });*/

    $(".myTablePlace").append(mytable);
}