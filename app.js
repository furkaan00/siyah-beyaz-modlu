function toggleColor() {
    var elements = document.querySelectorAll("body, div.profile, .profile-info, .name-circle, .name, .biography, .biography p, .close-icon");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var currentColor = element.style.color;
        var currentBackgroundColor = element.style.backgroundColor;

        if (currentColor === "white") {
            element.style.color = "black";
        } else {
            element.style.color = "white";
        }

        if (currentBackgroundColor === "black") {
            element.style.backgroundColor = "white";
        } else {
            element.style.backgroundColor = "black";
        }
    }

   
}
