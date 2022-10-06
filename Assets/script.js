// Ask: Create a day planner where elements are dynamically generated
// - [X] the current day is displayed at the top of the calendar
// - [ ] timeblocks for 9 - 5 (inlcuding 5)
// - [ ] timeblocks are color coded based on past, present, future
// - [ ] click to enter an event
// - [ ] storing event content into local storage
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
//inside the row will be the hrs will be 3, 8, 3 with bootstrap grids.

// function newBox() {

$(function (hrBlock) {
    var hrBlock = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
    // var hours = 0
    for (var i = 0; i < hrBlock.length; i++) {
        var cont = $("<div class ='row bg-secondary rounded-lg'></div>");
        //making an empty container with the class of row
        // cont.addClass("row");
        // cont.attr('id', hrs)
        var btn = $("<btn class ='col-2 bg-info border rounded-right-lg'> Sav </btn>");
        var evText = $("<textarea class ='col-8 bg-secondary'></textarea>");
        var hrLabel = $("<p class ='col-2 bg-white'></p>");
        hrLabel.text(hrBlock[i])
        $(cont).append(hrLabel, evText, btn);
        //im actually not sure why below is required for the box to show...?
        $(".container").append(cont);


    }
});












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
        //     $(".container").append(cont);
        // } else return