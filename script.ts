interface movies{
  url:string,
  cover:string,
  description:string,
  name:string
};
var media2append = appendMedia(Media)
insertMedia(app,media2append)
function appendMedia(arreglo:Array<Object>){
  let cook:string = "";
  for (let i = 0; i < arreglo.length; i++){
    let currentMovie:movies = arreglo[i];
    cook += "<div class='first-item' onclick='play("+ i + ", Media)' id='"+i+"'> <img class='img' src='"+currentMovie.cover+"'> <p>"+currentMovie.name+"</p> </div>"
  }
  return cook;
}
function insertMedia(Object:HTMLElement, media:string){
  Object.innerHTML = media
}
function play(id:number, mediaArray:Array<Object>){
  var Video = document.getElementById("videoZone")
  for(let i = 0; i < mediaArray.length; i++){
    if(i === id){
      insertMedia(Video,"<video src='"+ mediaArray[id].server+  "'controls autoplay></video>")
    }
    
  }
}