let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newgame=document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0 = true;
const winpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetgame = ()=>{
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("box was clicked!");
        if(turn0===true){
            box.innerText ="O";
            turn0=false;
        }else{
            box.innerText ="X";
            turn0=true;
        }
    box.disabled = true;

    checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    msg.innerText = `congratulations,Winner is ${ winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for (let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val !="" &&pos2val!="" && pos3val !=""){
        if(pos1val==pos2val  && pos2val==pos3val){
            console.log("Winner",pos1val);
            showWinner(pos1val);
        }
    }
 }
}

newgame.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);

