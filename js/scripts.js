function Places() {
    this.place = {};
}

Places.prototype.addPlace = function (placeBeen) {
    this.place[placeBeen.location] = place;
}

function Place(location, date, hotel, note) {
    this.location = location;
    this.date = date;
    this.hotel = hotel;
    this.note = note;
}



let newPlace = Place("Aruba", "10/12/20", "Hyatt", "was beautiful");
