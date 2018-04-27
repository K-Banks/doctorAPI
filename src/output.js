import $ from 'jquery';

class Output {

  DoctorList(doctor, practiceInformation) {
    if (doctor.first_name != undefined && doctor.last_name != undefined && doctor.title != undefined) {
      $("div.output").append(`
        <div class="card thumbnail">
          <img class="card-img-top" src="${doctor.image}" alt="Image of Dr. ${doctor.first_name} ${doctor.last_name}">
          <h4 class = "card-title name">${doctor.first_name} ${doctor.last_name}, ${doctor.title}</h4>
          <div id="${doctor.last_name}">
            <h4>Practice information:</h4>
          </div>
      `);
      let practiceTarget = `div#${doctor.last_name}`;
      if (practiceInformation[1] != undefined && practiceInformation[2] != undefined && practiceInformation[3] != undefined && practiceInformation[4] != undefined) {
        $(practiceTarget).append(`
          <p>Name: ${practiceInformation[0]}</p>
          <p>Address: ${practiceInformation[1]}, ${practiceInformation[2]}, ${practiceInformation[3]} ${practiceInformation[4]}</p>
        `);
      } else {
        $(practiceTarget).append(`
          <p>Name: ${practiceInformation[0]}</p>
          <p>Address: A valid address could not be found for this practice.</p>
        `);
      }
      if (practiceInformation[5] != undefined) {
        $(practiceTarget).append(`
          <p>Phone: ${practiceInformation[5]}</p>
        `);
      } else {
        $(practiceTarget).append(`
          <p>Phone: A valid phone number could not be found for this practice.</p>
        `);
      }
      if (practiceInformation[6] != undefined) {
        $(practiceTarget).append(`
          <p>Website: ${practiceInformation[6]}</p>
        `);
      } else {
        $(practiceTarget).append(`
          <p>Website: A valid website could not be found for this practice.</p>
        `);
      }
      if (practiceInformation[7] === true) {
        $(practiceTarget).append(`
          <p>Is this practice accepting new patients? <strong>Yes</strong></p>
        `);
      } else if (practiceInformation[7] === false) {
        $(practiceTarget).append(`
          <p>Is this practice accepting new patients? <strong>No</strong></p>
        `);
      } else {
        $(practiceTarget).append(`
          <p>No information is available on whether this practice is accepting new patients or not.</p>
        `);
      }
    } else {
      console.log("This doctor has invalid information and should not be displayed to user.");
    }
  }

}

export { Output };
