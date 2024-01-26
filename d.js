
//function p1(player1){
 //   player1 = parseInt(Math.floor(Math.random() * 6)+ 1);    
    
//    console.log(player1);
//    opreation();
//   return player1;
//}
//let result = p1();
//console.log(result);

//function p2(player2){
//    player2 = parseInt(Math.floor(Math.random() * 6)+ 1);
//      console.log(player2);
//      opreation();
 //   return player2;
// }
// let result1 = p2();
// console.log(result1);

 //function opreation(){
 //   player1 = document.querySelector('.btn');
//    player1 = parseInt(Math.floor(Math.random() * 6)+ 1);
   
//    player2 = document.querySelector('.btn');
//    player2 = parseInt(Math.floor(Math.random() * 6)+ 1);
    
//     console.log(player1);
//     console.log(player2);
//    if(player1 == player2){
//     console.log("Match draw");
//    }  
//     if(player2 < player1)
//    {
//     console.log("player 1 win");
//    } 
//    else if(player2 > player1)
//      {
//     console.log("player 2 win");
 //   }
 // }
 //  opreation();

 function opreation() {
 const p1 = Math.floor(Math.random() * 6)+ 1;
 const play1 = `i/g${p1}.jpeg`; 
 document.getElementById('check1').setAttribute('src', play1);

 const p2 = Math.floor(Math.random() * 6)+ 1;
 const play2 = `i/g${p2}.jpeg`; 
 document.getElementById('check2').setAttribute('src', play2);

 if(play1 > play2)
  {
    document.querySelector('h1').innerHTML="Player 1 won " + "&#128525";
  }
  else if(play1 < play2)
  {
    document.querySelector('h1').innerHTML="Player 2 won " + "&#129321";
  }
  else
  {
    document.querySelector('h1').innerHTML="draw " +"&#128526";
  }
 }