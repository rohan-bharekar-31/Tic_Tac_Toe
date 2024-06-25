let boxes=document.body.querySelectorAll(".box")
let resetbtn=document.body.querySelector("#reset")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let newgamebtn=document.body.querySelector("#new-btn")
let turn0=true //playerX playerO
let count=0;

const nowinner = (count) => {
    if(count==9){
        msg.innerText=`No Winner `;
        msgcontainer.classList.remove("hide");
        count = 0;
    }
}

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const reset=()=>{
    turn0 = true;
    count = 0;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log(count);
        console.log("boxwas clicked")
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
        nowinner(count);
    })
})

const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    count = 0;
    disableBoxes();
}
const checkwinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                // console.log("Winner");
                showWinner(pos1val);
            }
        }
    }
}
resetbtn.addEventListener("click",reset);
newgamebtn.addEventListener("click",reset);