var numberOfButtonClicks = 1;
var contentInTodoList;
$(document).keydown(function(event){
    contentInTodoList = $("#todoElement" + numberOfButtonClicks).val();
    if (event.keyCode === 13 && (contentInTodoList !== '' && contentInTodoList !== undefined)) {
        numberOfButtonClicks++;
        var n = "todoElementDiv" + numberOfButtonClicks;

        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "todoElementDiv");
        newDiv.setAttribute("id", n);

        var newCheckBox = document.createElement("input");
        newCheckBox.setAttribute("type", "checkbox");
        newCheckBox.setAttribute("class", "check-box");
        newCheckBox.setAttribute("id", "check-box" + numberOfButtonClicks);

        var newTodoElement = document.createElement("input");
        newTodoElement.setAttribute("type", "text");
        newTodoElement.setAttribute("class", "todoElement");
        newTodoElement.setAttribute("id", "todoElement" + numberOfButtonClicks);

        $(".todoList").append(newDiv);
        $("#" + n).append(newCheckBox);
        $("#" + n).append(newTodoElement);

        $("#todoElement" + numberOfButtonClicks).focus();
    }
});

$(document).on('change', '.check-box', function() {
    currentCheckBoxID = this.id;
    currentInputBoxID = "#" + currentCheckBoxID + " ~ .todoElement";
    if ($(this).is(":checked") && ($(currentInputBoxID).val() !== '' && $(currentInputBoxID).val() !== undefined)) {
        $(this).siblings('.todoElement').addClass("strikethrough");
        var aud = new Audio("./Sound/StrikeOff.mp3");
        aud.play();
    } else {
        $(this).siblings('.todoElement').removeClass("strikethrough");
    }
});


