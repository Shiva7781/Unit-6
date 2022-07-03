let mapContainer = document.getElementById("map")

function mapDisplay(place = "Bangalore") {
    const map = `<iframe
    width="650"
    height="358"
    frameborder="0" style="border:0"
    referrerpolicy="no-referrer-when-downgrade"
//    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCV-im_l-AEXmGhpSytEhqMOf2Gy6dB80g&q=${place}"
allowfullscreen>    
</iframe>`;
    mapContainer.innerHTML = map;
}
mapDisplay("Mysore Palace");