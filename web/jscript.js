/**
 * Created by Gosha on 28.11.2017.
 */

var TableTitle = ["Equantion", "First root","Second root"];
var EquantionAnswer = {Equantion:"Example: 4 x<sup>2</sup> + 2 x + 0 = 0", root1:"0.0", root2:"0.5"};
var TableValue = [EquantionAnswer];


$(document).ready(function(){
    rePrintTable();
})

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
        //textf.innerHTML = "Debug: "+coefA +coefB +coefC;

        var xhr = new XMLHttpRequest();
        xhr.open('Post', 'Solver', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('A='+encodeURIComponent(coefA)+'&B='+encodeURIComponent(coefB)+'&C='+encodeURIComponent(coefC));

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                var xmlDoc = xhr.responseXML;
                textf.innerHTML = "Debug: "+coefA +coefB +coefC+xmlDoc.getElementsByTagName("FirstRoot")[0].textContent;
                //формирование грамотного выражения
                var equantion = "";
                if(coefA == "0"){
                    if(coefB == "0"){
                        if (coefC == "0"){
                            equantion += "0 = 0";
                        }else{
                            equantion += ""+coefC+" = 0";
                        }
                    }else{
                        equantion = ""+coefB+" x";
                        if (coefC == "0"){
                            equantion += " = 0";
                        }else{
                            equantion += (coefC>0?" + ":" ") +coefC+" = 0";
                        }
                    }
                }else{
                    equantion = ""+coefA+" x<sup>2</sup>";
                    if(coefB == "0"){
                        if (coefC == "0"){
                            equantion += " = 0";
                        }else{
                            equantion += (coefC>0?" + ":" ")+coefC+" = 0";
                        }
                    }else{
                        equantion += (coefB>0?" + ":" ")+coefB+" x";
                        if (coefC == "0"){
                            equantion += " = 0";
                        }else{
                            equantion += (coefC>0?" + ":" ")+coefC+" = 0";
                        }
                    }
                }
                //var equantion = "" + ((coefA||coefB||coefC) ? ((coefA ? ""+coefA+" x<sup>2</sup> " : "" )+(coefB ? "+ "+coefB+" x " : "")+(coefC ? "+ "+coefC+" = 0" : " = 0" )) : "0 = 0");
                //TableValue.push([equantion,xmlDoc.getElementsByTagName("FirstRoot")[0].textContent,xmlDoc.getElementsByTagName("SecondRoot")[0].textContent]);
                TableValue.push(EquantionAnswer = {Equantion:equantion, root1:xmlDoc.getElementsByTagName("FirstRoot")[0].textContent, root2:xmlDoc.getElementsByTagName("SecondRoot")[0].textContent});
                rePrintTable();
            }
        }
    }
}
function rowDelete(rowNumber){
    TableValue.splice(rowNumber,1);
    rePrintTable();
}

function rePrintTable(){
//Данные таблицы создаются в глобальной области
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
//Заполняем таблицу в инверсии от данных - чтобы новые выводились вверху
//лучше добавлять новые записи в конец таблицы, так как добавление новых записей в начало сильно ухудшает производительность
    for (i = TableValue.length-1; i >= 0; i--) {
        //Переопределяем строку
        var DataCell = $('<tr/>',{OnClick:"rowDelete("+i+")"});
        //Пробегаемся по ячейкам
        $.each(TableValue[i],function() {
            DataCell.append(
                $('<td/>',{
                    html:this
                })
            );
        });
        $("tbody",mytable).append(DataCell);
    }
    $(".mytable").remove(); //после того, как все подготовительные этапы прошли происходит удаление имеющейся таблицы
    $(".myTablePlace").append(mytable); //и отрисовка новой согласно модели
}