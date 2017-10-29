var result="";
//var myObj ={
//    
//    "car_type" : {"audi" : 
//                 { "price" :"54.02 lakh", "fuel_type" : "Diesel" , "mileage" : "19.2kmpl" , "seating_capacity": "4", "transmission_type": "Automatic","number_of_cylinders": 4,"image":"<img src=./images/audi_a5.jpg alt=audi>"},
//                 "bmw" :
//                  {
//                      "price" :"52.0 lakh", "fuel_type" : "Diesel" , "mileage" : "22.48kmpl" , "seating_capacity": "5", "transmission_type": "Automatic","number_of_cylinders": "4","image":"<img src=./images/bmw_5_series.jpg alt=bmw>"
//                  },
//                  "mercedes" :
//                  {
//                      "price" :"51.73 lakh", "fuel_type" : "Diesel" , "mileage" : "17.9kmpl" , "seating_capacity": "5", "transmission_type": "Automatic","number_of_cylinders": "4","image":"<img src=./images/mercedes.jpg alt=mercedes"
//                  }
//                 }
//};
var myObj;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
     myObj = JSON.parse(this.responseText);
        console.log(myObj);
    document.getElementById("mytable").innerHTML = result;
    }
};
xmlhttp.open("GET", ".\cardata.json", true);
xmlhttp.send();
var car1="";
var car2="";
var fix_string="";
function comp_function(){
    car1=document.getElementById("dd1").value;
    car2=document.getElementById("dd2").value;
     fix_string="<tr> <th>Features</th> <th>"+car1+"</th> <th>"+car2+"</th> </tr>";
    check();
}


function car_desc(){
   var description="";
    var car = document.getElementById("myselect").value;
    console.log(myObj);
    for(var i in myObj.car_type[car]){
        description+="<tr><td>"+i+"</td><td>"+myObj.car_type[car][i]+"</td></tr>"
    }
 document.getElementById("desc_table").innerHTML ="<tr> <th>Features</th> <th>"+car+"</th></tr>"+description;
}

function check(){
    if(document.getElementById("allcheck").checked){
      
    document.getElementById("mytable").innerHTML =  allprops(myObj);
    }
    else if(document.getElementById("similarcheck").checked){
      
       document.getElementById("mytable").innerHTML =  similarprops(myObj);
    }
    else if(document.getElementById("diffcheck").checked){
      
    document.getElementById("mytable").innerHTML =  diffprops(myObj);
    }
    else
        result='';
        result="";
    }

function similarprops(myObj){
var intermediate_data="";
for(var i in myObj.car_type[car1]){
    for(var j in myObj.car_type[car2]){
        if(myObj.car_type[car1][i]==myObj.car_type[car2][j]){
          intermediate_data +=   "<tr><td>"+i+"</td><td>"+myObj.car_type[car1][i]+"</td><td>"+myObj.car_type[car2][j]+"</td></tr>";
        }
    }
}
result = fix_string+intermediate_data;
    return result;
}
function diffprops(myObj){
var intermediate_data="";
for(var i in myObj.car_type[car1]){
    for(var j in myObj.car_type[car2]){
        if((myObj.car_type[car1][i]!=myObj.car_type[car2][j])&&(i==j)){
          intermediate_data +=  "<tr><td>"+i+"</td><td>"+myObj.car_type[car1][i]+"</td><td>"+myObj.car_type[car2][j]+"</td></tr>";
        }
    }
}
result = fix_string+intermediate_data;
    return result;
}

function allprops(myObj){
var intermediate_data="";
for(var i in myObj.car_type[car1]){
    for(var j in myObj.car_type[car2]){
         if(i==j){
          intermediate_data +=  "<tr><td>"+i+"</td><td>"+myObj.car_type[car1][i]+"</td><td>"+myObj.car_type[car2][j]+"</td></tr>";
         }
        }
    }

result = fix_string+intermediate_data;
    return result;
}


