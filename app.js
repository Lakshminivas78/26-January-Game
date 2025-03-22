let enterBtn = document.querySelector("#Enter");
let P1 = document.querySelector("#P1");
let P2 = document.querySelector("#P2");
let P3 = document.querySelector("#P3");
let SOP_1 = document.querySelectorAll(".SOP_1");
let SOP_2 = document.querySelectorAll(".SOP_2");
let SOP_3 = document.querySelectorAll(".SOP_3");  // queryselectorAll returns a nodelist so we can't apply innerHTML property directly on this







enterBtn.addEventListener("click",()=>{

    let input1 = document.getElementById("input1").value;
    if(input1 === ""){
        input1 = "Player Name 1";
    }

    let input2 = document.getElementById("input2").value;
    if(input2 === ""){
        input2 = "Player Name 2";
    }

    let input3 = document.getElementById("input3").value;
    if(input3 === ""){
        input3 = "Player Name 3";
    }
    
    // Loop through all elements with the class "SOP_1" and update their innerHTML
    SOP_1.forEach(element => {
        element.innerHTML = input1;
    });

    // Loop through all elements with the class "SOP_2" and update their innerHTML
    SOP_2.forEach(element => {
        element.innerHTML = input2;
    });

    // Loop through all elements with the class "SOP_3" and update their innerHTML
    SOP_3.forEach(element => {
        element.innerHTML = input3;
    });

    fg_1.innerHTML = input1;
    fg_2.innerHTML = input2;
    fg_3.innerHTML = input3;

    P1.innerHTML = input1;
    P2.innerHTML = input2;
    P3.innerHTML = input3;
});

let optionSelect = document.getElementById("optionSelect");

optionSelect.addEventListener("change",()=>{
      let df = document.getElementById("default");
      df.innerHTML = "";

      let choose = optionSelect.value;
      console.log(choose);

      let A = parseInt(document.getElementById("pfn_1").value)
      let B = parseInt(document.getElementById("pfn_2").value)
      let C = parseInt(document.getElementById("pfn_3").value)

      let runA ;
      let runB ;
      let runC ;

      A = A + 0.6;
      B = B + 0.4;
      C = C + 0.2;
      
        if(choose == 1){
           runA = A;
           runB = C;
           runC = B;
        }

        else if(choose == 2){
           runA = A;
           runB = B;
           runC = C;
        }

        else if(choose == 3){
           runA = B;
           runB = C;
           runC = A;
        }

        else if(choose == 4){
           runA = B;
           runB = A;
           runC = C;
        }

        else if(choose == 5){
           runA = C;
           runB = B;
           runC = A;
        }

        else{
           runA = C;
           runB = A;
           runC = B;
        }
        
        let runA1 = runA ;
        let runB1 = runB ;
        let runC1 = runC ;

      
        let ans = 0;
          
        let i = 1;
        while(i<=26){
             
            for(let j = 1; j <= Math.floor(runA) ; j++){
                
                if(i<=26){
                  ans = runA1;
                  i++;
                }
                else{
                  break;
                }
            }
             
            for(let j = 1; j <= Math.floor(runB) ; j++){
                
                if(i<=26){
                  ans = runB1;
                  i++;
                }
                else{
                  break;
                }
            }
            
            for(let j = 1; j <= Math.floor(runC) ; j++){

                if(i<=26){
                  ans = runC1;
                  i++;
                }
                else{
                  break;
                }
            }
        }
          
    console.log(ans); 

    if(ans == A){
      let input1 = document.getElementById("input1").value;
      let looser = document.getElementById("looser");
      looser.innerHTML = input1;
    }

    else if(ans == B){
      let input2 = document.getElementById("input2").value;
      let looser = document.getElementById("looser");
      looser.innerHTML = input2;
    }

    else{
      let input3 = document.getElementById("input3").value;
      let looser = document.getElementById("looser");
      looser.innerHTML = input3;
    }


});




