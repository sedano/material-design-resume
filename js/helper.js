$.getJSON('http://ipinfo.io', function (data) {
    // console.log(data)
    if (data.country === "IE") {
        $("#about-text").text("I'm a Robotics Engineer with experience in both technical and project management fields. I have worked for recognized Applied Robotics Research Institutes, lead projects in the food sector and did mechanical design and validation of medical devices. I'm passionate about technology and experienced in 3D CAD design.");
    }
});