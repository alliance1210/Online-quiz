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
   Question:"The Battle of Plassey was fought in",
   a:"1757",
   b:"1782",
   c:"1787",
   d:"1807",
   answer:"1757"
},{
    Question:"Tripitakas are sacred books of",
    a:"Hindus",
    b:"Jains",
    c:"Buddhists",
    d:"Christians",
    answer:"Buddhists"
},{
    Question:"The treaty of Srirangapatna was signed between Tipu Sultan and",
    a:"Robert Clive",
    b:"Cornwallis",
    c:"Dalhousie",
    d:"Warren Hastings",
    answer:"Cornwallis"
},{
    Question:"The system of competitive examination for civil service was accepted in principle in the year",
    a:"1833",
    b:"1853",
    c:"1857",
    d:"1877",
    answer:"1853"
},{
    Question:"The Vijayanagara ruler, Kirshnadev Raya's work Amuktamalyada, was in",
    a:"Sanskrit",
    b:"Tamil",
    c:"Kannada",
    d:"Telugu",
    answer:"Telugu"
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

