;
var media2append = appendMedia(Media);
insertMedia(app, media2append);
function appendMedia(arreglo) {
    var cook = "";
    for (var i = 0; i < arreglo.length; i++) {
        var currentMovie = arreglo[i];
        cook += "<div class='first-item' onclick='play(" + i + ", Media)' id='" + i + "'> <img class='img' src='" + currentMovie.cover + "'> <p>" + currentMovie.name + "</p> </div>";
    }
    return cook;
}
function insertMedia(Object, media) {
    Object.innerHTML = media;
}
function play(id, mediaArray) {
    var Video = document.getElementById("videoZone");
    for (var i = 0; i < mediaArray.length; i++) {
        if (i === id) {
            insertMedia(Video, "<video src='" + mediaArray[id].server + "'controls autoplay></video>");
        }
    }
}
