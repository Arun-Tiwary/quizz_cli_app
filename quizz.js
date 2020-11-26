var input=require('readline-sync');
 var chalk=require('chalk');
 
 var score=0;

 var name= input.question("What is your name?\n");
 console.log("Welcome "+name+" to Do you Know Arun");

 function quiz(question,answer)
 {
   var UserAnswer = input.question(question);

   if(UserAnswer===answer){

     console.log("correct!");
     score=score+1;

   }
   else{
     console.log("opps! you are wrong");
   if(score!=0)
   {
     score=score-1
   }
   }
   console.log("current score: ",score);
   console.log("------------------");


 }

var questionOne= {
  question:"Where Do I live?",
  answer: "India"
}

var questionTwo={
  question:"My Favourite Series?",
  answer:"The Big Bang Theory"
}

var questionThree={
  question:"What do I do?",
  answer:"Nothing"
}
 
 var questionFour={
  question:"What is My favourite Color?",
  answer:"Magenta Black"
}
 
 var questionFive={
  question:"My Favourite Movie?",
  answer:"DON"
}
 
 
 var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]

 for(var i=0;i<questions.length;i++)
 {
   currentQuestion=questions[i];
   quiz(currentQuestion.question,currentQuestion.answer)

 }
 console.log("your final score is "+score)