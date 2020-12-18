function application() {
    var i;
    var local = [];
    var mediaLength = Media.length;
    for (i = 0; i < mediaLength; i++) {
        var cardStructure = "<div class='item-start'> <a  href='#'> <img class='img' src='" + Media[i].coverAncho + "'> <p> " + Media[i].name + "</p></a></div>";
        local.push(cardStructure);
        console.log(local);
    }
    app.innerHTML = local;
}
function rendered(input) { }
