/*https://codesandbox.io/s/quiz-pure-dom-l0k8x?file=/src/index.js:4889-4906*/
const science=[
    {
   Question:"'Satmala Hills' are located in which among the following states?",
   a:"Gujarat",
   b:"Uttar Pradesh",
   c:"Maharashtra",
   d:"Rajasthan",
   answer:"Maharashtra"
},{
    Question:"Apart from India, in which of the following two countries, Tamil is an official language? ",
    a:"Mauritius and Malaysia",
    b:"Malaysia and Indonesia",
    c:"Sri Lanka and Mauritius",
    d:"Sri Lanka and Singapore",
    answer:"Sri Lanka and Singapore"
},{
    Question:"How many time zones are there in Russia?",
    a:"11",
    b:"12",
    c:"13",
    d:"14",
    answer:"11"
},{
    Question:"India's only active volcano is located at which among the following places?",
    a:"Car Nicobar",
    b:"Barren island",
    c:"Maya Bunder",
    d:"Lakshdweep",
    answer:"Barren island"
},{
    Question:"How many days does it take for the Earth to orbit the Sun?",
    a:"265",
    b:"364",
    c:"365",
    d:"420",
    answer:"365"
}
];
let c= 0;
 function startQuiz(){
    document.getElementById("ans1").style.backgroundColor="#7CB9E8";
    document.getElementById("ans2").style.backgroundColor="#7CB9E8";
    document.getElementById("ans3").style.backgroundColor="#7CB9E8";
    document.getElementById("ans4").style.backgroundColor="#7CB9E8";
    disabled=false;
    document.getElementById("home").style.display="none";
    document.getElementById("hide").style.display="block";
    c = 14;
    update = setInterval("timer()", 1000);
    document.getElementById("question").innerText=science[counter].Question;
        document.getElementById("ans1").innerText=science[counter].a;
        document.getElementById("ans2").innerText=science[counter].b;
        document.getElementById("ans3").innerText=science[counter].c;
        document.getElementById("ans4").innerText=science[counter].d;
        
}



function scienceQuiz(){
  
    document.getElementById("category").style.display="none";
    document.getElementById("spage").style.display="block";
}
const button = document.querySelector("#restart-button");
const bars = document.querySelectorAll(".round-time-bar");



counter=0;
button.addEventListener("click", () => {
    bars.forEach((bar) => {
      bar.classList.remove("round-time-bar");
      bar.offsetWidth;
      bar.classList.add("round-time-bar");
    });
  });
 

function timer(){
        c=c-1;
        if(c<1){
        disabled=true;
        if(science[counter].a === science[counter].answer){
            document.getElementById('ans1').style.backgroundColor="green";
            document.getElementById('ans2').style.backgroundColor="#b32d00";
            document.getElementById('ans3').style.backgroundColor="#b32d00";
            document.getElementById('ans4').style.backgroundColor="#b32d00";
      }
        else if(science[counter].b === science[counter].answer){
            document.getElementById('ans1').style.backgroundColor="#b32d00";
            document.getElementById('ans2').style.backgroundColor="green";
            document.getElementById('ans3').style.backgroundColor="#b32d00";
            document.getElementById('ans4').style.backgroundColor="#b32d00";
     }
         else if(science[counter].c === science[counter].answer){
            document.getElementById('ans1').style.backgroundColor="#b32d00";
            document.getElementById('ans2').style.backgroundColor="#b32d00";
            document.getElementById('ans3').style.backgroundColor="green";
            document.getElementById('ans4').style.backgroundColor="#b32d00";
          }
         else{
            document.getElementById('ans1').style.backgroundColor="#b32d00";
            document.getElementById('ans2').style.backgroundColor="#b32d00";
            document.getElementById('ans3').style.backgroundColor="#b32d00";
            document.getElementById('ans4').style.backgroundColor="green";
     }
     window.clearInterval(update);
     c=14;
    }
}


function nextQuestion(){
    window.clearInterval(update);
    c=14;
    
    counter++;
    document.getElementById("ans1").style.backgroundColor="#7CB9E8";
    document.getElementById("ans2").style.backgroundColor="#7CB9E8";
    document.getElementById("ans3").style.backgroundColor="#7CB9E8";
    document.getElementById("ans4").style.backgroundColor="#7CB9E8";
    disabled=false;
   
    if( counter < science.length){
        
        document.getElementById("question").innerText=science[counter].Question;
        document.getElementById("ans1").innerText=science[counter].a;
        document.getElementById("ans2").innerText=science[counter].b;
        document.getElementById("ans3").innerText=science[counter].c;
        document.getElementById("ans4").innerText=science[counter].d;
    }
    else{
        document.getElementById("hide").style.display="none";
        document.getElementById("score").style.display="block";
        document.getElementById("result").innerHTML=countAns+" out of 5";
       
        
    }
    update = setInterval("timer()", 1000);
}


function reload(){
    document.getElementById("score").style.display="none";
    document.getElementById("home").style.display="block";
    document.getElementById("spage").style.display="none";
    document.getElementById("category").style.display="block";
    counter=0;
    countAns=0;
    
   
}
countAns = 0;
let disabled=false;

function firstOption(){
    c=0;
    if(disabled === false){
    if(science[counter].a === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="green";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
        countAns++;
        
    }
        else if(science[counter].b === science[counter].answer){
            document.getElementById('ans1').style.backgroundColor="#b32d00";
            document.getElementById('ans2').style.backgroundColor="green";
            document.getElementById('ans3').style.backgroundColor="#b32d00";
            document.getElementById('ans4').style.backgroundColor="#b32d00";
     }
         else if(science[counter].c === science[counter].answer){
            document.getElementById('ans1').style.backgroundColor="#b32d00";
            document.getElementById('ans2').style.backgroundColor="#b32d00";
            document.getElementById('ans3').style.backgroundColor="green";
            document.getElementById('ans4').style.backgroundColor="#b32d00";
          }
         else{
            document.getElementById('ans1').style.backgroundColor="#b32d00";
            document.getElementById('ans2').style.backgroundColor="#b32d00";
            document.getElementById('ans3').style.backgroundColor="#b32d00";
            document.getElementById('ans4').style.backgroundColor="green";
     }
    
}
     disabled=true;  
}
function secondOption(){
    c=0;
    if(disabled===false){
    if(science[counter].b === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="green";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
        countAns++;
       
    }
    else if(science[counter].a === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="green";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
 }
     else if(science[counter].c === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="green";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
      }
     else{
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="green";
 }
}   disabled=true;
}
function thirdOption(){
    c=0;
    if(disabled===false){
    if(science[counter].c === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="green";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
        countAns++;
    }
    else if(science[counter].b === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="green";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
 }
     else if(science[counter].a === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="green";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
      }
     else{
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="green";
 }
}
disabled=true;
}
function fourthOption(){
    c=0;
    if(disabled===false){
    if(science[counter].d === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="green";
        countAns++;
       
    }
    else if(science[counter].b === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="green";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
 }
     else if(science[counter].c === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="#b32d00";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="green";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
      }
     else{
        document.getElementById('ans1').style.backgroundColor="green";
        document.getElementById('ans2').style.backgroundColor="#b32d00";
        document.getElementById('ans3').style.backgroundColor="#b32d00";
        document.getElementById('ans4').style.backgroundColor="#b32d00";
 }
}
disabled=true;
}
