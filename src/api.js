import { apiKey } from './../.env';

class API {

  SearchByIssue(searchString, location) {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.betterdoctor.com/2016-03-01/doctors?location=${location}&user_key=${apiKey}&query=${searchString}`);
      xhr.send();
      xhr.onload = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
    return promise;
  }


}

export { API }
