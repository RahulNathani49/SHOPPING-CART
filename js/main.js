function dragStart(event) {
    event.dataTransfer.setData("img", event.target.id);

}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("img");
    event.target.appendChild(document.getElementById(data));
}

function count() {
    var display = document.getElementById("display");
    var dropped = document.getElementById("drop");
    console.log(dropped.childNodes);
    var i;
    var count = [];
    for (i = 0; i < 6; i++) {
        count[i] = document.getElementsByClassName("price")[i].innerHTML;
        count[i] = parseInt(count[i]);
        console.log(count[i]);
    }
    sum=0
    for(i=0;i<6;i++){
        sum=sum+count[i];
    }
   display.innerHTML=sum + "rs only";
  
    
}
