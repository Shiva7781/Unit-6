var map = [
    {
        title: "Bengaluru Fort",
        location: "Bengauru",
        link: "https://goo.gl/maps/rvAZCdTfET7Q8An7A",
        place: "https: //www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.565648310188!2d77.56713142403486!3d12.962801653785213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e3043a1d57%3A0xb2a4590209bde6d7!2sBengaluru%20Fort!5e0!3m2!1sen!2sin!4v1657266870758!5m2!1sen!2sin"
    },
    {
        title: "Fort E street",
        location: "Bengauru",
        link: "https://goo.gl/maps/GUArbLvrcSEMg1X9A",
        place: "https: //www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.739829904618!2d77.56754402403438!3d12.960013653814483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1596960572c1%3A0x3e04c7b1a1b7b382!2sFort%20E%20street!5e0!3m2!1sen!2sin!4v1657268305175!5m2!1sen!2sin"
    },
    {
        title: "Fort High School",
        location: "Bengauru",
        link: "https://goo.gl/maps/UA1gQE9vmVtkwhG19",
        place: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.82958027255!2d77.56477002403409!3d12.958576853829575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e4cc1023f5%3A0x7e17b39d66a1bcf7!2sFort%20High%20School!5e0!3m2!1sen!2sin!4v1657268627713!5m2!1sen!2sin"
    },
    {
        title: "West Fort Hotel",
        location: "Bengauru",
        link: "https://goo.gl/maps/mZ22JSiGsmoZ7tN9A",
        place: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.54993318201!2d77.55547212403789!3d12.979047753614676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df9cedaa007%3A0xdd8342b241841baf!2sWest%20Fort%20Hotel!5e0!3m2!1sen!2sin!4v1657268907654!5m2!1sen!2sin"
    }
]


let mapContainer = document.querySelector(".map");

function mapDisplay() {

    const data = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.735069763727!2d77.56438522403437!3d12.960089853813688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15fb5394a715%3A0xe976b426cd80e4be!2sFort%20Telephone%20Exchange!5e0!3m2!1sen!2sin!4v1657273614569!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    mapContainer.innerHTML = data;
}
mapDisplay();

function mapDisplay1() {
    const data = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.565648310188!2d77.56713142403486!3d12.962801653785213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e3043a1d57%3A0xb2a4590209bde6d7!2sBengaluru%20Fort!5e0!3m2!1sen!2sin!4v1657266870758!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapContainer.innerHTML = data;
}
// mapDisplay1();

function mapDisplay2() {
    const data = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.739829904618!2d77.56754402403438!3d12.960013653814483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1596960572c1%3A0x3e04c7b1a1b7b382!2sFort%20E%20street!5e0!3m2!1sen!2sin!4v1657268305175!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapContainer.innerHTML = data;
}
// mapDisplay2();

function mapDisplay3() {
    const data = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.82958027255!2d77.56477002403409!3d12.958576853829575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e4cc1023f5%3A0x7e17b39d66a1bcf7!2sFort%20High%20School!5e0!3m2!1sen!2sin!4v1657268627713!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapContainer.innerHTML = data;
}
// mapDisplay3();

function mapDisplay4() {
    const data = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.54993318201!2d77.55547212403789!3d12.979047753614676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df9cedaa007%3A0xdd8342b241841baf!2sWest%20Fort%20Hotel!5e0!3m2!1sen!2sin!4v1657268907654!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    mapContainer.innerHTML = data;
}
    // mapDisplay4();
