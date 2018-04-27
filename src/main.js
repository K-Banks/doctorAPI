import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';
import { Doctor } from './doctorInfo.js';
import { Output } from './output.js';

// Hide Output field upon loading page. Avoid conflict w/styling
$("div.output").hide();

$(document).ready(function(){
  $('form#mdIssueForm').submit(function(event) {
    event.preventDefault();
    const apiCall = new API();
    const outputCall = new Output();
    let issueSearchString = $("#issueStringSubmission").val();
    $("#issueStringSubmission").val("");
    $("div.output").hide();
    $("div.output").empty();
    $("div.noResult").hide();
    $("div.errorOuput").hide();
    $("span#searchString").text(issueSearchString);
    $("p#searchStore").show();

    let userCity = $("input#userCity").val();
    let userState = $("input#userState").val();
    let userLocation = userState + "-" + userCity;
    userLocation = userLocation.toLowerCase();

    let promiseSearch = apiCall.SearchByIssue(issueSearchString, userLocation);
    promiseSearch.then(function(response) {
      if (response.data[0] != undefined) {
        let doctors = response.data;
        doctors.forEach(function(doctor) {
          let practice = doctor.practices[0];
          let thisDoctor = new Doctor(doctor);
          let practiceInformation = thisDoctor.PracticeParser(practice);
          outputCall.DoctorList(thisDoctor, practiceInformation);
          $("div.output").show();
        });
      } else {
        $("div.noResult").show();
      }
    }, function(error) {
      $("h1#errorShow").text(`There was an error processing this search. Please try again. (Error message: ${error})`);
      $("div.errorOutput").show();
      console.log(error);
    });
  });
});
