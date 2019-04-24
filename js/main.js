var sumnew=0;
var dropitemscount=0;
function dragStart(event) {
    event.dataTransfer.setData("img", event.target.id);

}

function allowDrop(event) {
    event.preventDefault();
}

var display = document.getElementById("display");
   display.setAttribute("id","rate");

function drop(event,x) {
    
    var cartitem = document.getElementById("cartcount");
    cartitem.innerHTML=dropitemscount;
    

    event.preventDefault();
    var data = event.dataTransfer.getData("img");
    event.target.appendChild(document.getElementById(data));

    var t = event.target.childNodes;
    console.log(t);
    var length = event.target.childNodes.length;
    
    
    
    
    
    var i;
    var sum=0;
    var j;
    var count = [];
   for(j=0,i=1;i<length;i++,j++){
       
        count[j]=t[i].childNodes[3].innerHTML;
    count[j]=parseInt(count[j]);
       sum=sum+count[j];
       
       
       console.log(count[j]);
    t[i].childNodes[5].style.display="block";
       
   }
    
   display.innerHTML="TOTAL = " + sum + "rs only";
    document.getElementById("cartcount").innerHTML=length-1;
}


function delitem(x){
    
    var box = x.parentNode;
    var i=0;
   var main = document.getElementById("main");
   var len=  main.childNodes[1].childNodes.length;

    
    for(i=1;i<len;i++){
        if(main.childNodes[1].childNodes[i].childNodes[1].childNodes.length==2){
        main.childNodes[1].childNodes[i].childNodes[1].appendChild(box);
        box.childNodes[5].style.display="none";
            
        }
        i++;
    }
    var ns=0;
   var nod = document.getElementById("droppeditem").childNodes.length;
    var newsum=[];
    for(i=1;i<nod;i++){
    newsum[i]=document.getElementById("droppeditem").childNodes[i].childNodes[3].innerHTML;
        newsum[i]=parseInt(newsum[i]);
        ns=ns+newsum[i];
    }
    display.innerHTML="TOTAL = " + ns + "rs only";
   var newcartcount = document.getElementById("cartcount").innerHTML; 
    newcartcount=newcartcount-1;
   document.getElementById("cartcount").innerHTML=newcartcount;
}
    
    

