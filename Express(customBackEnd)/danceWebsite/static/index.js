let heading = document.getElementById("heading");
function start(element){
    element.firstChild.firstChild.style.color = "white";
    element.firstChild.firstChild.style.fontSize = "small";
    let img = document.createElement('img');
    element.appendChild(img);
    // console.log("start");
    // heading = document.createElement('h3');
    // heading.className = "heading";
    // element.firstChild.appendChild(heading);
    if(element.id == 'con1'){
        // img.src = "static/poster.png";
        // img.style.width = "100%";
        // img.style.height = "55%";
    }
    if(element.id == 'con2'){
        heading.textContent = "Professional Trainers";
    }
    if(element.id == 'con3'){
        heading.textContent = "Professional shit";
    }
    if(element.id == 'con4'){
        heading.textContent = "Professional room";
    } 
    ``
}
function end(element){
    // element.firstChild.firstChild.remove();
    element.firstChild.firstChild.style.color = "black";
    element.firstChild.firstChild.style.fontSize = "medium";
    // element.firstChild.nextSibling.remove();
}


