// Ask: Create a day planner where elements are dynamically generated
// - [ ] the current day is displayed at the top of the calendar
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
//
// $(function () {
//     var hrBlock = 9;
//     for (i = 1; 1 < 9; i++) {
$(".container").html("<p>test</p>")
//     }
// });