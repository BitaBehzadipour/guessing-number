'use strict';
/*console.log(document.querySelector(".hello").textContent);
document.querySelector(".hello").textContent="start";
document.querySelector(".work").textContent="score";
document.querySelector(".input").value;
document.querySelector(".input").value;*/
let score=20;
let highscore=0;
let number=Math.trunc(Math.random()*20)+1;
document.querySelector(".div1").textContent=number;
document.querySelector(".click").addEventListener('click',
    function(){
   const guss= Number (document.querySelector(".input").value);
    console.log(guss,typeof guss);
        if(!guss){
            document.querySelector(".nonumber").textContent="no number!!"
        }
        else if(number===guss){
            document.querySelector(".div1").textContent=number;
            document.querySelector(".nonumber").textContent="🎉correct numberrrr!!:)";
            document.querySelector("body").style.backgroundColor='#60b347';
            document.querySelector('.div1').style.width='200px';
            document.querySelector(".div3").style.display='none';
            if(score>highscore){
                document.querySelector(".highscore").textContent="highscore:"+score;
            }
        }
        else if(guss!=number){
            if(score>0){
                if(guss>number){
                  document.querySelector(".nonumber").textContent="too high!!";  
                }else{
                    document.querySelector(".nonumber").textContent="too low!!";
                }
              
            score--;
            document.querySelector(".score").textContent="score:"+score;  
            }
            else {
                document.querySelector(".nonumber").textContent="you lost game!😜🤣😢"
                document.querySelector("body").style.backgroundColor="red";
            }
            
        }
        
    }
)
document.querySelector(".again").addEventListener('click',function(){
    let score=20;
    let number=Math.trunc(Math.random()*20)+1;
    document.querySelector(".nonumber").textContent="start gussing...";
    document.querySelector(".score").textContent="score" +score;
    document.querySelector(".div3").textContent="?";
    document.querySelector(".input").value='';
    document.querySelector("body").style.backgroundColor="white";





})
