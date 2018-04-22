
//document.getElementsById("hideButton").addEventListener("click", changeBckGnd);
//$(document).ready(function () {
//    $("#addAchild").hide(1000);

//    $("#hideButton").click(function () {
//        $("#addAchild").show(1000);
//    });
//});
$(document).ready(function () {
    document.getElementById("addChild").addEventListener("click", addNewChild);
    document.getElementById("hideButton").addEventListener("click", myfunction);
});
var numChild = 1;
function addNewChild() {
    if (this.innerHTML.trim() == '+') {
        if (true) {
            var div = document.createElement("div");
            var labelLName = document.createElement("label");
            labelLName.innerHTML = "LastName:";
            var inputLName = document.createElement("input");
            var labelFName = document.createElement("label");
            labelFName.innerHTML = "FirstName:";
            var inputFName = document.createElement("input");
            var birthday = document.createElement("label");
            birthday.innerHTML = "Birthday:";
            var inputBirth = document.createElement("input");
            inputBirth.setAttribute("type", "date");
            var classe = document.createElement("label");
            classe.innerHTML = "Class:";
            var selectClass = document.createElement("select");
            var mybreak = document.createElement("br");
            var mybreak2 = document.createElement("br");
            var mybreak3 = document.createElement("br");
            var mybreak4 = document.createElement("br");
            var mybreak5 = document.createElement("br");
            var mybreak6 = document.createElement("br");
            var mybreak7 = document.createElement("br");
            var mybreak8 = document.createElement("br");
            var option1 = document.createElement("option");
            option1.innerHTML = 'א';
            var option2 = document.createElement("option");
            option2.innerHTML = 'ב';
            var option3 = document.createElement("option");
            option3.innerHTML = 'ג';
            var option4 = document.createElement("option");
            option4.innerHTML = 'ד';
            var option5 = document.createElement("option");
            option5.innerHTML = 'ה';
            selectClass.appendChild(option1);
            selectClass.appendChild(option2);
            selectClass.appendChild(option3);
            selectClass.appendChild(option4);
            selectClass.appendChild(option5);
        }
        ////////////////////////////////////////////////
        var labelFor = document.createElement("label");
        labelFor.innerHTML = "For:";
        var timeInput = document.createElement("input");
        timeInput.setAttribute("type", "number");
        var selectKindOfTime = document.createElement("select");
        var week = document.createElement("option");
        week.innerHTML = "weeks";
        var month = document.createElement("option");
        month.innerHTML = "months";
        var year = document.createElement("option");
        year.innerHTML = "years";
        selectKindOfTime.appendChild(week);
        selectKindOfTime.appendChild(month);
        selectKindOfTime.appendChild(year);
        ///////////////////////////////////////////////
        var addButton = document.createElement("button");
        addButton.innerHTML = "+";
        div.appendChild(labelLName);
        div.appendChild(mybreak);
        div.appendChild(inputLName);
        div.appendChild(mybreak2);
        div.appendChild(labelFName);
        div.appendChild(mybreak3);
        div.appendChild(inputFName);
        div.appendChild(mybreak4);
        div.appendChild(birthday);
        div.appendChild(mybreak5);
        div.appendChild(inputBirth);
        div.appendChild(mybreak6);
        div.appendChild(classe);
        div.appendChild(mybreak7);
        div.appendChild(selectClass);
        div.appendChild(mybreak8);///
        div.appendChild(labelFor);
        div.appendChild(timeInput);
        div.appendChild(selectKindOfTime);////
        div.appendChild(addButton);
        div.setAttribute("style.display", "none");
        document.body.appendChild(div);

        this.innerHTML = '-';
        numChild++;
        var divID = "div" + numChild.toString()
        div.setAttribute("id", divID);
     //   document.getElementById(divID).hide();
     //   $('#'+divID).show(1000);

        addButton.setAttribute("id", "btn" + numChild);
        document.getElementById("btn" + numChild.toString()).addEventListener("click", addNewChild);

    }
    else {
        var divToRemove = document.getElementById("div" + numChild.toString());
        ///////////
        var str = "#div" + numChild.toString();
        alert(str);
        $(str).hide(1000);
        /////////
        document.body.removeChild(divToRemove);
       this.innerHTML = '+';

        numChild--;
    }

}
function myfunction() {

    var div = document.getElementById("addAchild");
    if (div.style.display === "none")
        $("#addAchild").show(1000);
    else

        $("#addAchild").hide(1000);
}

//function changeBckGnd() {
//    document.body.style.backgroundColor = "red";

//}