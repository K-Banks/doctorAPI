import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { API } from './api.js'

$(document).ready(function(){
  $('form#userForm').submit(function(event) {
    event.preventDefault();
    let apiCall = new API();
    let promiseSearch = apiCall.testSearch();

    promiseSearch.then(function(response) {
      console.log(response);
      debugger;
    }, function(error) {
      console.log(error);
    });
  });
});
