import { apiKey } from './../.env';

class API() {

  testSearch() {
    let promise = new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=3&user_key=${apiKey}`);
      xhr.send();
      xhr.onload() = function() {
        if (this.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(Error(xhr.statusText));
        }
      }
    });
  }

}

export { API }