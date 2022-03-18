var player1name = localStorage.getItem("player1_name")
var player2name = localStorage.getItem("player2_name")
var player1_score = 0
var player2_score = 0
document.getElementById("player1_name").innerHTML= player1name
document.getElementById("player2_name").innerHTML= player2name
document.getElementById("player_question").innerHTML= "Question turn - " + player1name
document.getElementById("player_answer").innerHTML= "Answer turn - " + player2name
document.getElementById("player1_score").innerHTML= 0
document.getElementById("player2_score").innerHTML= 0
function send(){
    number1=document.getElementById("number1").value
    number2=document.getElementById("number2").value
    actual_answer= parseInt(number1) * parseInt(number2)
    console.log(actual_answer)
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value= "";
document.getElementById("number2").value= "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    ans= document.getElementById("input_check_box").value
    if(ans == actual_answer){
        if(answer_turn == "player2"){
            player2_score = player2_score + 1
            document.getElementById("player2_score").innerHTML = player2_score
        }
        else{
            player1_score = player1_score + 1
            document.getElementById("player1_score").innerHTML = player1_score
        }
    }
    if(answer_turn = "player2"){
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML= "Answer Turn - "+ player1name
    }
    else{
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML= "Answer Turn - "+ player2name
    }
    if(question_turn = "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML= "Question Turn - "+ player2name
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML= "Question Turn - "+ player1name
    }
    
    document.getElementById("output").innerHTML="";
}