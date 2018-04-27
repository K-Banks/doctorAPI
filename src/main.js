import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js';
import { Doctor } from './doctorInfo.js';

$(document).ready(function(){
  $('form#userForm').submit(function(event) {
    event.preventDefault();
    let apiCall = new API();
    let promiseSearch = apiCall.testSearch();

    promiseSearch.then(function(response) {
      let doctors = response.data;
      let practice = response.data[0].practices[0];
      let doctor = new Doctor(doctors[0]);
      let practiceInformation = doctor.PracticeParser(practice);

      // add data to front end using jquery
      if (doctor.first_name != undefined && doctor.last_name != undefined && doctor.title != undefined) {
        $("span#doctorName").text(`${doctor.first_name} ${doctor.last_name}, ${doctor.title}`);
        $("span#practiceName").text(practiceInformation[0]);
        if (practiceInformation[1] != undefined && practiceInformation[2] != undefined && practiceInformation[3] != undefined && practiceInformation[4] != undefined) {
          $("span#practiceAddress").text(`${practiceInformation[1]}, ${practiceInformation[2]}, ${practiceInformation[3]} ${practiceInformation[4]}`);
        } else {
          $("span#practiceAddress").text('A valid address could not be found for this practice.');
        }
        if (practiceInformation[5] != undefined) {
          $("span#practicePhone").text(practiceInformation[5]);
        } else {
          $("span#practicePhone").text('A valid phone number could not be found for this practice.')
        }
        if (practiceInformation[6] != undefined) {
          $("span#practiceWebsite").text(practiceInformation[6]);
        } else {
          $("span#practiceWebsite").text('A valid website could not be found for this practice.')
        }
        if (practiceInformation[7] === true) {
          $("span#practicePatient").text("This practice is currently accepting new patients.");
        } else if (practiceInformation[7] === false) {
          $("span#practicePatient").text("This practice is not currently accepting new patients.")
        } else {
          $("span#practicePatient").text('No information is available on whether this practice is accepting new patients or not.')
        }
      } else {
        console.log("This doctor has invalid information and should not be displayed to user.");
      }

      // add image to profile
      let responseImage = document.getElementById("image");
      responseImage.src = doctor.image;
    }, function(error) {
      console.log(error);
    });
  });
});
