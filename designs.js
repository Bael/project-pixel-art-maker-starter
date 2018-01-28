// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {

    // prevent refreshing the form
    event.preventDefault();

    // clear old table
    $("#pixelCanvas").children().remove();


    var height = Number($("#inputHeight").val());
    var width = Number($("#inputWeight").val());

    var table = document.getElementById("pixelCanvas");
    // form row example
    var trow = [];
    for(var j=0; j<width; j++)
    {
        trow.push("<td  draggable='false'> </td>");
    }
    var innerHtmlRow = "<tr draggable='false'>" + trow.join("") + "</tr>";

    // forming tbody
    var tbody = [];
    for (var i=0; i< height; i++) {
        tbody.push(innerHtmlRow);
    }
    table.innerHTML = "<tbody>" + tbody.join("") + "</tbody>";

    // add handlers
    var statePressed = false;
    $("#pixelCanvas").on("mousemove", "td", function () {
        if (statePressed) {
            $(this).css("background-color", $("#colorPicker").val());
        }
    })

    $("#pixelCanvas").on("click", "td", function () {
        $(this).css("background-color", $("#colorPicker").val());
        statePressed = false;
    })

    // toggling paint mode
    $("body").on("mouseup", function () {
        statePressed = false;
    });

    $("body").on("mousedown", function () {
        statePressed = true;
    });











}
