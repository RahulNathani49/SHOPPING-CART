var sumnew = 0;
var dropitemscount = 0;

function dragStart(event) {
    event.dataTransfer.setData("img", event.target.id);

}

function allowDrop(event) {
    event.preventDefault();
}

var display = document.getElementById("display");
display.setAttribute("id", "rate");

function drop(event, x) {
    
    var cartitem = document.getElementById("cartcount");
    cartitem.innerHTML = dropitemscount;

    var data = event.dataTransfer.getData("img");
   
     event.target.appendChild(document.getElementById(data));
    var value = event.target.childNodes[1].childNodes[7].value;
    console.log(value); 
    if(value>0){  
    event.preventDefault();
    }
 
    var t = event.target.childNodes;
    console.log(t);
    var length = event.target.childNodes.length;
    console.log(value);
    var i;
    var sum = 0;
    var j;
    var count = [];
    var mul=[];
    for (j = 0, i = 1; i < length; i++, j++) {

        count[j] = t[i].childNodes[3].innerHTML;
        mul[i]=event.target.childNodes[i].childNodes[7].value;
        count[j] = parseInt(count[j]);
        if(mul[i]>0){
            
        sum = sum + count[j]*mul[i];  
        }
        else{
        alert("ITEM QNT MUST BE 1 OR MORE");
        }
        t[i].childNodes[5].style.display = "block";

    }
    

    display.innerHTML = "TOTAL = " + sum + "rs only";
    document.getElementById("cartcount").innerHTML = length - 1; 
}

function delitem(x) {

    var box = x.parentNode;
    box.childNodes[7].value=1;
    var i = 0;
    var main = document.getElementById("main");
    var len = main.childNodes[1].childNodes.length;


    for (i = 1; i < len; i++) {
        if (main.childNodes[1].childNodes[i].childNodes[1].childNodes.length == 2) {
            main.childNodes[1].childNodes[i].childNodes[1].appendChild(box);
            box.childNodes[5].style.display = "none";

        }
        i++;
    }
    var ns = 0;
    var newmul=[];
    var nod = document.getElementById("droppeditem").childNodes.length;
    var newsum = [];
    for (i = 1; i < nod; i++) {
        newsum[i] = document.getElementById("droppeditem").childNodes[i].childNodes[3].innerHTML;
        newmul[i] = document.getElementById("droppeditem").childNodes[i].childNodes[7].value;
        newsum[i] = parseInt(newsum[i]);
        ns = ns + newsum[i]*newmul[i];
        
    }
    display.innerHTML = "TOTAL = " + ns + "rs only";
    var newcartcount = document.getElementById("cartcount").innerHTML;
    newcartcount = newcartcount - 1;
    document.getElementById("cartcount").innerHTML = newcartcount;

}

function counttotal(){
    var ns = 0;
    var newmul=[];
    var nod = document.getElementById("droppeditem").childNodes.length;
    var newsum = [];
    
    for (i = 1; i < nod; i++) {
        newmul[i] =  document.getElementById("droppeditem").childNodes[i].childNodes[7].value;
        if(newmul[i]>0){
        newsum[i] = document.getElementById("droppeditem").childNodes[i].childNodes[3].innerHTML;
     
        newsum[i] = parseInt(newsum[i]);
        ns = ns + newsum[i]*newmul[i];
        }
        else{
            alert("ITEM MUST BE 1 OR MORE");
              
        }
    }
    display.innerHTML = "TOTAL = " + ns + "rs only";
    var newcartcount = document.getElementById("cartcount").innerHTML;
}