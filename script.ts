function application() {
  var i;
  var local = [];
  var mediaLength = Media.length;
  for (i = 0; i < mediaLength; i++) {
    var cardStructure = "<a href=#'" + Media[i] + "> <img class='' src='"+Media[i].coverAncho+"'>" + "</a>";
    local.push(cardStructure);
    console.log(local);
  }
  app.innerHTML = local;
}
function rendered(input) {}
