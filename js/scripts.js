function openNav() {
    
    var x = document.getElementById("menu");

    if (x.className === "menu") {
        x.className += " menujs";
        document.getElementById("threeline").innerHTML = "&Cross;";
    }

    else {
        x.className = "menu";
        document.getElementById("threeline").innerHTML = "&#9776;";
    }

}