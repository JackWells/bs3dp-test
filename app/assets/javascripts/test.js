// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(function() {
  $('#datetimepicker').datetimepicker({
  pickTime: false,
  defaultDate: "10/25/2014",
  disabledDates: [
      "10/27/2014 00:53",
      "10/28/2014 00:53"
  ]});
});
