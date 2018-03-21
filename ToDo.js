//var taskArr=[];
 var taskArr = []|| JSON.parse(localStorage.getItem('data')) ;
    window.onload=function () {
    var taskValue=document.getElementById('task');
    var list=document.getElementById('list');
    var submit=document.getElementById('sub');


submit.onclick=function () {

  var task ={
      "Value": taskValue.value,
      "done": false
    }

    taskArr.push(task);
     localStorage.setItem('data', JSON.stringify(taskArr));

    display();


}


};



 // For line through
function check(el)
{
    console.log(el);

    taskArr[el.id].done=true;
    el.style.textDecoration='line-through';

}
 // For removing
function remo(el) {


    var v=el.getAttribute('id');
    console.log(v);
    taskArr.splice(v,1);
     localStorage.setItem('data', JSON.stringify(taskArr));
    //taskArr.splice(el.id.value,1);

    for(var i=0;i<taskArr.length;i++)
    {
        console.log(taskArr[i]);
    }

     display();
}
function update(el) {

var v=el.id.slice(6);
console.log(v);
// var v2=el2.getAttribute('id');
//console.log(v2);
    console.log('ab'+v);
    console.log(document.getElementById('ab'+v));
    taskArr[v].Value=document.getElementById('ab'+v).value;
    localStorage.setItem('data', JSON.stringify(taskArr));
    display();
}


//For display
function display () {
    var data="";

    list.innerHTML="";


    for(var i=0;i<taskArr.length;i++)
    {

            data+=
                "<div id= '+ i +' "+
                '<span style="font-size: 20px">'+
                taskArr[i].Value+
                '</span>'+
                '<div >' +
                '  <button  id="' + i  + '" onclick="remo(this)"style= "background-color: white ;outline:none;font-size:medium">Remove' +
                '</button>   '+
                '<input  id="ab'+i+'">'+
                '<button id="update'+ i +'" onclick="update(this)" style= "background-color: white ;outline: none ;font-size: medium">Update'+
                '</button>  '+

                '</div>'+
                '</div>'+'<br>';

    }

    list.innerHTML=data;

}


