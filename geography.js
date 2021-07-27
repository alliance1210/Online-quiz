/*https://codesandbox.io/s/quiz-pure-dom-l0k8x?file=/src/index.js:4889-4906*/
 
function startQuiz(){
    document.getElementById("home").style.display="none";
    document.getElementById("hide").style.display="block";
    document.getElementById("question").innerText=science[counter].Question;
        document.getElementById("ans1").innerText=science[counter].a;
        document.getElementById("ans2").innerText=science[counter].b;
        document.getElementById("ans3").innerText=science[counter].c;
        document.getElementById("ans4").innerText=science[counter].d;

}
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
    Question:"India’s only active volcano is located at which among the following places?",
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
counter=0;


function nextQuestion(){
    counter++;
    document.getElementById("ans1").style.backgroundColor="#7CB9E8";
    document.getElementById("ans2").style.backgroundColor="#7CB9E8";
    document.getElementById("ans3").style.backgroundColor="#7CB9E8";
    document.getElementById("ans4").style.backgroundColor="#7CB9E8";
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
}
function reload(){
    document.getElementById("score").style.display="none";
    document.getElementById("home").style.display="block";
    counter=0;
    countAns=0;
   
}
countAns = 0;
function firstOption(){
    if(science[counter].a === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="green";
        document.getElementById('ans2').style.backgroundColor="red";
        document.getElementById('ans3').style.backgroundColor="red";
        document.getElementById('ans4').style.backgroundColor="red";
        countAns++;
        
    }
    else{
        document.getElementById('ans1').style.backgroundColor="red";
    }
}
function secondOption(){
    if(science[counter].b === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="red";
        document.getElementById('ans2').style.backgroundColor="green";
        document.getElementById('ans3').style.backgroundColor="red";
        document.getElementById('ans4').style.backgroundColor="red";
        countAns++;
       
    }
    else{
        document.getElementById('ans2').style.backgroundColor="red";
    }
}
function thirdOption(){
    if(science[counter].c === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="red";
        document.getElementById('ans2').style.backgroundColor="red";
        document.getElementById('ans3').style.backgroundColor="green";
        document.getElementById('ans4').style.backgroundColor="red";
        countAns++;
    }
    else{
        document.getElementById('ans3').style.backgroundColor="red";
    }
}
function fourthOption(){
    if(science[counter].d === science[counter].answer){
        document.getElementById('ans1').style.backgroundColor="red";
        document.getElementById('ans2').style.backgroundColor="red";
        document.getElementById('ans3').style.backgroundColor="red";
        document.getElementById('ans4').style.backgroundColor="green";
        countAns++;
       
    }
    else{
        document.getElementById('ans4').style.backgroundColor="red";
    }
}

