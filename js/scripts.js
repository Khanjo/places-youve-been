//Business Logic
function Places() {
    this.place = {};
}

function Place(location, date, hotel, note) {
    this.location = location;
    this.date = date;
    this.hotel = hotel;
    this.note = note;
}

Places.prototype.addPlace = function (placeBeen) {
    this.place[placeBeen.location] = placeBeen;
}

//User Interface Logic
window.addEventListener("load", function () {
    let form = document.querySelector("form");
    const placesYouBeen = new Places();
    let display = document.getElementById("display");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let loc = document.getElementById("loc").value;
        let time = document.getElementById("time").value;
        let hotel = document.getElementById("hotel").value;
        let description = document.getElementById("description").value;
        let newPlace = new Place(loc, time, hotel, description);
        placesYouBeen.addPlace(newPlace);

        form.reset();
        console.log(placesYouBeen);
    })
})