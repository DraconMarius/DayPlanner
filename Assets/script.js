// Ask: Create a day planner where elements are dynamically generated
// - [X] the current day is displayed at the top of the calendar
// - [X] timeblocks for 9 - 5 (inlcuding 5)
// - [X] timeblocks are color coded based on past, present, future
// - [X] click to enter an event (textarea)
// - [ ] storing event content into local storage with button
// - 

//moment in the header, using set interval to update everyone second

var currenT = $("#currentDay");
currenT.text(moment().format("dddd, MMM Do YYYY, hh[:]mm[:]ss A"));
setInterval(function () {
    currenT.text(moment().format("dddd, MMM Do YYYY, hh[:]mm[:]ss A"))
}, 1000);
// var timer = function () {
//     va

//dynamically generating time block element using jquery
//we want 9 blocks from 9 am to 5 pm
//seems like we have some sort of hour label, a text area, and then a button
//to trigger it saving?
//get variable to have the string of html
//
//ok we want a row with the ID of the hours, class of row to store the events
//inside the row will be the hrs will be 2, 8, 2 with bootstrap grids.

// function newBox() {

$(function (hrBlock) {
    // var currentH = $( <-- not needed moment().format("ha"));
    var milT = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    var hrBlock = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    // var hours = 0
    for (var i = 0; i < hrBlock.length; i++) {
        var cont = $("<div class =' time-block row rounded-lg'></div>");
        //making an empty container with the class of row
        // cont.addClass("row");
        // cont.attr('id', hrs)
        var btn = $("<btn class ='col-2 saveBtn d-flex justify-content-center align-items-center'> <i class='fas fa-cat fa-3x'></i> </btn>");
        btn.attr("id", milT[i]);
        var evText = $("<textarea class ='col-8'></textarea>");
        evText.attr("id", milT[i]);// so we can use it to determine the colors
        evText.text(localStorage.getItem(milT[i]))
        var hrLabel = $("<p class ='col-2 bg-white d-flex justify-content-center align-items-center'></p>");
        hrLabel.text(hrBlock[i]);
        $(cont).append(hrLabel, evText, btn);
        //putting it in the container
        $(".container").append(cont);
    };
    // $("div").each(function () {
    //colors based on past prest future
    $(function () {
        for (var i = 0; i < hrBlock.length; i++) {
            var momentH = moment().format("H");
            var currentH = (parseInt(momentH));
            var h = (parseInt(milT[i]));
            // console.log(currentH);
            // console.log(h);
            // console.log("present: " + (h == currentH));
            // console.log("past: " + (h < currentH));
            // console.log("future: " + (h > currentH));
            var present = (h == currentH);
            var past = (h < currentH);
            var future = (h > currentH);
            if (present) {
                $("#" + milT[i]).addClass("present");
            } else if (past) {
                $("#" + milT[i]).addClass("past");
            } else if (future) {
                $("#" + milT[i]).addClass("future");
            } else return;
        };
    })
    //update every 30 seconds could have named a fn 
    //but i didn't wanna mess it up...
    setInterval(function () {
        for (var i = 0; i < hrBlock.length; i++) {
            var momentH = moment().format("H");
            var currentH = (parseInt(momentH));
            var h = (parseInt(milT[i]));
            // console.log(currentH);
            // console.log(h);
            // console.log("present: " + (h == currentH));
            // console.log("past: " + (h < currentH));
            // console.log("future: " + (h > currentH));
            var present = (h == currentH);
            var past = (h < currentH);
            var future = (h > currentH);
            if (present) {
                $("#" + milT[i]).addClass("present");
            } else if (past) {
                $("#" + milT[i]).addClass("past");
            } else if (future) {
                $("#" + milT[i]).addClass("future");
            } else return;
        };
    }, 1500);

    // console.log(typeof ($(".saveBtn").attr("id")));//string
    $(function (event) {
        $(".container").on("click", ".saveBtn", function () {
            // var id = attr("id")
            var id = (this.id);
            var toSave = $(this).prev().val();
            // console.log(id);
            console.log(toSave);
            localStorage.setItem(id, toSave);
        })
    });

});
        // });


        //     var
        //         console.log(currentH);
        //     console.log(parseInt(currentH));
        //     // if (currentH.is()
        // for (var i = 0; i < hrBlock.length; i++) {
        // var intNowBlock = $("#row").val(hrBlock[i])
        // console.log($("#row").val(hrBlock[i]))
        // if (currentH.is($("#id"))) {
        //     this.val(hrBlock[i]).addClass(".Present");
        //     console.log("test" + hrBlock[i]);
        // } else return;
        // };
        // $(".time-block").each(function (i) {
        //     // console.log($(this).attr("id"));
        // });





        //adding the container to the page manually cuz im frustrated at the lack of progress
        //it was because I wrote a "#1" and not an "i". RIP
        // if (i = 0) {
        //     $(".container").append(cont);
        // } if (i = 1) {
        //     $(".container").append(cont);
        // } if (i = 2) {
        //     $(".container").append(cont);
        // } if (i = 3) {
        //     $(".container").append(cont);
        // } if (i = 4) {
        //     $(".container").append(cont);
        // } if (i = 5) {
        //     $(".container").append(cont);
        // } if (i = 6) {
        //     $(".container").append(cont);
        // } if (i = 7) {
        //     $(".container").append(cont);
        // } if (i = 8) {
        //     $(".container").append(cont);
        // } if (i = 9) {
        //     $(".container").append(cont)