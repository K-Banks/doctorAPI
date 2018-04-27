import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';
import { Doctor } from './doctorInfo.js';
import { Output } from './output.js';

$(document).ready(function(){
  $('form#mdIssueForm').submit(function(event) {
    event.preventDefault();
    let apiCall = new API();
    let outputCall = new Output();
    let issueSearchString = $("#issueStringSubmission").val();
    $("#issueStringSubmission").val("");
    $("div.output").hide();
    $("div.noResult").hide();
    $("div.errorOuput").hide();
    $("span#searchString").text(issueSearchString);

    let promiseSearch = apiCall.SearchByIssue(issueSearchString);
    promiseSearch.then(function(response) {
      if (response.data[0] != undefined) {
        let doctors = response.data;
        doctors.forEach(function(doctor) {
          let practice = response.data[0].practices[0];
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
