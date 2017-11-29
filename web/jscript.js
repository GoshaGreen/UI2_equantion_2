/**
 * Created by Gosha on 28.11.2017.
 */

function trdel(){
    var textf = document.getElementById("textfield");
    textf.innerHTML = "Debug: Delite";
}

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
                table.innerHTML =  table.innerHTML + "<tr><td>"+coefA+" x<sup>2</sup> + "+coefB+" x + "+coefC+" = 0</td>"+xhr.responseText+"</tr>";
            }
        }
    }
}

function dell() {
    $("#tablee").onfocus(function(){
        $("#textfield").innerHTML = "Debug: Delite1";
        }
    );
}

function dell2() {
    $("#tradel").click(function(){
        $("#textfield").innerHTML = "Debug: Delite2";
        }
    );
}