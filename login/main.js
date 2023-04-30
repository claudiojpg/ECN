
function login(){
    var user, password
    
    user = document.getElementById("usuario").value;
    password= document.getElementById("password").value;


    if(user == "claudio" && password =="1234"){
       location.href="index.html"
    }
    else{
     alert("error")    
    }


}
const time=document.getElementById('time');
const date=document.getElementById('date');

const monthNames=["Enero","Febrero","Marzo",
                    "Abril","Mayo","Junio","Julio",
                "Agosto","Septiembre","Octubre","Noviembre"
            ,"Diciembre"];
const interval = setInterval(() =>{

    const local =new Date();
    let day=local.getDate();
        month=local.getMonth();
        year=local.getFullYear();

time.innerHTML= local.toLocaleTimeString();
date.innerHTML=`${day} ${monthNames[month]} ${year}`;

},1000);