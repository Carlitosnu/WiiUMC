"use strict";

function application() {
  var i;
  var local = [];
  var mediaLength = Media.length;

  for (i = 0; i < mediaLength; i++) {
    var cardStructure = "<a class='movieContainer' href=#'" + Media[i] + "> <img class='img' src='" + Media[i].coverAncho + "'>" + "<p class='name'>" + Media[i].name + "</p>" + "</a>";
    local.push(cardStructure);
    console.log(local);
  }

  app.innerHTML = local;
}

function rendered(input) {}