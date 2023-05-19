function initMap() {
    const museumLocation = { lat: 63.880308150531675, lng: 11.269075735053704 }

    const map = new google.maps.Map(document.getElementById("map"), {
        center: museumLocation,
        zoom: 14
    });

    const marker = new google.maps.Marker({
        position: museumLocation,
        map: map,
        title: "Community Science Museum"
    });
}