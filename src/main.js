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
      $("span#firstName").text(doctor.first_name);
      $("span#lastName").text(doctor.last_name);
      $("span#title").text(doctor.title);
      $("span#practiceName").text(practiceInformation[0]);
      $("span#practiceStreet").text(practiceInformation[1]);
      $("span#practiceCity").text(practiceInformation[2]);
      $("span#practiceState").text(practiceInformation[3]);
      $("span#practiceZip").text(practiceInformation[4]);
      $("span#practicePhone").text(practiceInformation[5]);
      $("span#practiceWebsite").text(practiceInformation[6]);
      $("span#practicePatient").text(practiceInformation[7]);

      // add image to profile
      let responseImage = document.getElementById("image");
      responseImage.src = doctor.image;
    }, function(error) {
      console.log(error);
    });
  });
});
