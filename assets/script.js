for (var i=0; i<9; i++) {
    var textBlock = $("<textarea/>");
    textBlock.addClass("text-block");
    var timeBlock = $("<div> 10am </div>");
    timeBlock.addClass("time-block");
    timeBlock.addClass("hour");
    var saveButton = $("<button id='saveButton'/>");
    saveButton.addClass("saveBtn");
    var row = $("<div/>");
    row.append(timeBlock);
    row.append(textBlock);
    row.append(saveButton);
    row.addClass("row");


    $(".container").append(row);
    $(".container").append($("<br>"));
}