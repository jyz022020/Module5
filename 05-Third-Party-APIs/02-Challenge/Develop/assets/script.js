var currentTimeRawArray = moment().format('h a').split(" ");
var currHour = parseInt(currentTimeRawArray[0]);
var currpmam = currentTimeRawArray[1];
if (currpmam === "pm" && currHour != 12) {
    currHour = currHour + 12;
}
$("#currentDay").text(moment().format("LLLL"));
console.log(currHour);
for (var i=9; i<18; i++) {
    var ampm = "";
    var abs_time = i;
    if (i<12) {
        ampm = "am";
    } else {
        ampm = "pm";
        if (i > 12) {
            abs_time = i - 12;
        }
    }
    var textBlock = $("<textarea id='textBlock-" + i + "'/>");
    if (i < currHour) {
        textBlock.addClass("past");
    } else if (i === currHour) {
        textBlock.addClass("present");
    } else {
        textBlock.addClass("future");
    }
    textBlock.addClass("text-block");
    textBlock.text(getTaskFromStorage(i));
    var timeBlock = $("<div></div>");
    timeBlock.text(abs_time + ampm);
    timeBlock.addClass("time-block");
    timeBlock.addClass("hour");
    var saveButton = $("<button id='saveButton' value=" + i + "/>");
    saveButton.addClass("saveBtn");
    var row = $("<div class = 'timeBlockRow'/>");
    row.append(timeBlock);
    row.append(textBlock);
    row.append(saveButton);
    row.addClass("row");


    $(".container").append(row);
    $(".container").append($("<br>"));
}
console.log(moment().format('h a'));

function getTaskFromStorage(key) {
    return localStorage.getItem(key);
}

function setTaskToStorage(key, value) {
    localStorage.setItem(key, value);
}

$( ".saveBtn" ).click(function() {
    var index = this.value;
    var value = $("#textBlock-" + index).val();
    setTaskToStorage(index, value);
  });