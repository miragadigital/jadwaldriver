document.addEventListener("DOMContentLoaded", function() {
    var messages = {
        0: "SELAMAT BERISTIRAHAT DI HARI MINGGU",
        1: "PAK WILDAN",
        2: "PAK WARIAN",
        3: "PAK DIDIK",
        4: "PAK AGUS",
        5: "PAK AMIN",
        6: "SELAMAT BERISTIRAHAT DI HARI SABTU"
    };

    var today = new Date().getDay();
    var message = messages[today];

    document.getElementById("message").textContent = message;
});
