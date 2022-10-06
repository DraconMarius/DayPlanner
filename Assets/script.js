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
$(function () {
    var hours = 0
    for (i = 0; 1 < 9; i++) {
        var hrs = i + 9;
        var btn = $("<btn> Sav </btn>");
        var evText = $("<textarea></textarea>");
        //making an empty container with the class of row
        var cont = $("<div></div>");
        cont.addClass("row");
        cont.attr("id", hrs);
        //adding the 
        if (i = 0) {
            $(".container").append(cont);
        }
    }
});