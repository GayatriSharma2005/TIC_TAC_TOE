let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset_button");
let turnO=true;
let msg=document.querySelector(".msgcontainer");
let reset=document.querySelector("#reset_button");

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was Clicked");
        if(turnO==true)
        {
        box.innerText="O";
         box.style.color="blue";
        turnO=false;

    }
    else{
        box.innerText="X";
        box.style.color="black";
        turnO=true;
    }
    box.disabled=true;

    checkWinner();
});
    });
const checkWinner=()=>{
 for (pattern of winPatterns){
    
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText; 
    
    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if(pos1val == pos2val && pos2val == pos3val && pos3val == pos1val){
             msg.innerText=`Congratulation!! Winner is ${pos1val}`;
             console.log("winner");
             msg.classList.remove("hide");
             disableButton();
             celebrateWin(); // <-- ADD THIS LINE
            
             break;
             
        }
    }
    


let isDraw = true;
    for (let box of boxes) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    

    
    if (isDraw) {
        msg.innerText = "It's a Draw! \n Try Again";
        msg.classList.remove("hide");
    }
};
}
    
//const showWinner=(winner)=>
//{if()
  //  msg.innerText=`Congratulation!! Winner is ${winner}`;
    //msg.classList.remove("hide");
    //disableButton();
//}
 
const disableButton=()=>
{
   for (let box of boxes){
    box.disabled=true;
   } 
}
const resetB=()=>
{
    turnO=true;

enableButton();
msg.classList.add("hide");


}
const enableButton=()=>
{
   for (let box of boxes){
    box.disabled=false;
    box.innerText=""
   } 
}
function celebrateWin() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

reset.addEventListener("click",resetB);



