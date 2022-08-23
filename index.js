var readlineSync = require('readline-sync');


function welcome(){
console.log("Hi buddy let's start the quiz!")
var userName = readlineSync.question("what is your name ?\n")
console.log("let's see "+userName+" , How well do you know me!!..")
console.log("here we go!!!..")}
var questions = [{
  que:  "what is my full name?\n",
  mcq: ['Arun Shukla','Arun Mishra', 'Arun Tripathi','Arun Tiwari'],
  ans: "1"
},{
  que:  "What is my AGE\n",
  mcq: ['21','22','23','19'],
  ans: "2"
},{
  que:"Where do i live?\n",
  mcq:['Phagwara','Jalandhar','Amritsar','Chandigarh'],
  ans: "1"
},{
  que: "Which is my favourite movie?\n",
  mcq: ['Bell bottom','War','Saaho','Vikram'],
  ans: "3"
},{
  que:"Who is my favourite character?\n",
  mcq:['Prabhas','Ram Charan','Manoj Bajpayee','KK Menon'],
  ans: "3"
},{
  que: "Who is my favourite cricketer?\n",
  mcq: ['Hardik Pandya','Rohit Sharma','Virat Kohli','Ms Dhoni'],
  ans: "2"
},{
  que: "who is my favourite singer?\n",
  mcq: ['Badshah','Sonu Nigam', 'Mithun','Arijit Singh'],
  ans: "3"
}]
var highScoreList = [
  {
    name: "Sagar",
    score: "4"
  },
  {
    name: "Bipul",
    score: "3"
  }
]
var score = 0
function quiz(){
for(i =0;i<questions.length;i++)
  {
    console.log("Que "+(i+1))
    let currentQuestion=questions[i];
   play(currentQuestion.que,currentQuestion.mcq,currentQuestion.ans)
  }
}

function play( que, mcq, ans)
  {
    const index = readlineSync.keyInSelect(mcq,que)
    
    if( index == ans )
    {
      console.log("right answer")
      score=score+1;
      console.log("Great! you got +1 buddy")
      console.log("Your latest score is:  "+score)
      
    }
    else
    {
      console.log("wrong anser")
      score=score-1;
      console.log("Oh Oh! you get -1 buddy")
      console.log("Your latest score is : "+score)
    }
    
  }

function highScore(){
  for(i=0;i<highScoreList.length;i++)
  {
    
  if(score>highScoreList[i].score)
  {
    console.log("Great you scored highest!!")
    console.log("Ping me your name to update the list ...")
    break;
  }else{
    console.log("oh oh! you scored less score..")
    console.log("Try again Buddy..")
    break;
  }
  }
}
function showHighScore(){
  console.log("\n Checkout the highest score..\n")
highScoreList.map( score => console.log(score.name, " : ", score.score))
}
welcome();
quiz();
showHighScore();
highScore();