//答えを用意
var number=Math.floor(Math.random()*3);
var anwer=parseInt(window.prompt('数当てゲーーーーーム！0~2の数字を入力してね'));

var message;
if(answer===number){
   message='あたり！';
  }else if(answer<number){
   message='残念～もっと大きいよ！';
  }else if(number<answer){
   message='残念～もっと小さいよ！';
  }else{
   message='0~3の数字を入力してね';
  }
  
  //結果を表示
  document.getElementById('choice').textContent=message;
