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
function scienceQuiz(){
    document.getElementById("category").style.display="none";
    document.getElementById("spage").style.display="block";
}

const science=[
    {
   Question:"Which organisation has developed highly purified ‘Antisera’, for Covid-19 treatment?",
   a:"ICMR",
   b:"AIIMS",
   c:"JIPMER",
   d:"CSIR",
   answer:"ICMR"
},{
    Question:"How many bones are in the human body?",
    a:"106",
    b:"108",
    c:"206",
    d:"208",
    answer:"206"
},{
    Question:"What is the hardest natural substance on Earth?",
    a:"Iron",
    b:"Diamond",
    c:"Gold",
    d:"Silver",
    answer:"Diamond"
},{
    Question:"Humans and chimpanzees share roughly how much DNA?",
    a:"98%",
    b:"88%",
    c:"68%",
    d:"58%",
    answer:"98%"
},{
    Question:"How many teeth does an adult human have?",
    a:"26",
    b:"28",
    c:"30",
    d:"32",
    answer:"32"
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
    document.getElementById("spage").style.display="none";
    document.getElementById("category").style.display="block";
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

