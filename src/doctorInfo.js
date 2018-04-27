class Doctor {

  constructor(doctorObject) {
    this.first_name = doctorObject.profile.first_name;
    this.last_name = doctorObject.profile.last_name;
    this.title = doctorObject.profile.title;
    this.image = doctorObject.profile.image_url;
  }

  PracticeParser(practice) {
    let practiceInformationArray = [];
    practiceInformationArray.push(practice.name);
    practiceInformationArray.push(practice.visit_address.street);
    practiceInformationArray.push(practice.visit_address.city);
    practiceInformationArray.push(practice.visit_address.state);
    practiceInformationArray.push(practice.visit_address.zip);
    practiceInformationArray.push(practice.phones[0].number);
    practiceInformationArray.push(practice.website);
    practiceInformationArray.push(practice.accepts_new_patients);
    console.log("After practice information compilation: " + practiceInformationArray);
    return practiceInformationArray;
  }

}
