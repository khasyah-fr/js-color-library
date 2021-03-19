function set() {
    document.body.style.setProperty("--main-color", random())

    // Random
    var randomElements = document.getElementsByClassName("random")
    Array.from(randomElements).forEach(rElem => {
        var color = random()
        rElem.style.backgroundColor = color;
        rElem.textContent = color;
    });

    // Complementary
    var color = random();
    document.body.style.setProperty("--comp", color);
    document.getElementById("complement1").textContent = color;

    var complement = complementary(document.body.style.getPropertyValue("--comp"));
    document.getElementById("complement2").style.backgroundColor = complement;
    document.getElementById("complement2").textContent = complement;

    // Shade
    var baseColor = random();
    document.body.style.setProperty("--base", baseColor);
    var baseElements = document.getElementsByClassName("base")
    Array.from(baseElements).forEach(bElem => {
        bElem.style.backgroundColor = baseColor;
        bElem.textContent = baseColor;
    });

    var lightColor = shade(document.body.style.getPropertyValue("--base"), 50);
    document.getElementById("lighten").style.backgroundColor = lightColor;
    document.getElementById("lighten").textContent = lightColor;

    var darkColor = shade(document.body.style.getPropertyValue("--base"), -50);
    document.getElementById("darken").style.backgroundColor = darkColor;
    document.getElementById("darken").textContent = darkColor;
}

set();