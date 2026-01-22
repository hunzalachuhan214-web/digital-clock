function updateClock() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var session = "A.M.";

    if (h >= 12) {
        session = "P.M.";
    }

    if (h > 12) {
        h = h - 12;
    }
    
    if (h == 0) {
        h = 12;
    }

    if (m < 10) {
        m = "0" + m;
    }

    document.getElementById("time-text").innerText = h + ":" + m;
    document.getElementById("ampm-text").innerText = session;
}

setInterval(updateClock, 1000);

updateClock();