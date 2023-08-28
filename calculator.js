function equlvalentCheck(){
  //this allow the last value to remain in view untill next button are presses....
  if(parseInt(document.getElementById('equlvalent').value))
  {
     document.getElementById('equlvalent').value=0;
     document.getElementById('result').value=0;

  }

}

function input(x){
  equlvalentCheck();

  let y=parseFloat(document.getElementById('result').value);
    
  if(document.getElementById('decimalVar').value==0)
  {
    x+=y*10;//y *10 and add x..
    document.getElementById('result').value=x;

  }
  else{
     let decimalCount=parseInt(document.getElementById('decimalVar').value);
     if(decimalCount==1){
      x*=1/10;
     y+=x;
     document.getElementById('result').value=y;
     }
     else{
      document.getElementById('result').value+=x;

     }
     decimalCount++;
     document.getElementById('decimalVar').value=decimalCount;

  }
   
}
function decimalPoint(){
  if(document.getElementById('decimalVar').value==0)
  {
    document.getElementById('decimalVar').value=1;

  }
  if(parseInt(document.getElementById('operation').value)){
    document.getElementById('result').value=0;//this is an empty string it will return false..

  }
}


function operandCheck(){
  if(document.getElementById('operand').value==""){
    document.getElementById('operand').value=document.getElementById('result').value;

    document.getElementById('result').value=0;//this is temporay.
    document.getElementById('equlvalent').value=1;

  }else{
     operatorCheck();

  }
}
function operatorCheck(){
    let a=parseFloat(document.getElementById('operand').value);
    let b=parseFloat(document.getElementById('result').value);

    switch(parseInt(document.getElementById('operation').value)){

      case 1://addition
       a+=b;
       break;
      case 2://sub
        a-=b;
        break;
      case 3://multiplication
      a*=b;
      break;
      case 4://division
      a/=b;
      break;

    }
    document.getElementById('operand').value=a;
    document.getElementById('result').value=a;
    document.getElementById('equlvalent').value=1;


}

function operators(x){
switch(x){
  case 1:
    document.getElementById('operation').value=1;//addition
    break;
  case 2:
    document.getElementById('operation').value=2;//substractions
      break;
  case 3:
    document.getElementById('operation').value=3;//multiplication
        break;
  case 4:
    document.getElementById('operation').value=4;//division
          break;
   default:
}
  operandCheck();  
}
function equals(){
   operators(parseInt(document.getElementById('operation').value));
   document.getElementById('result').value=document.getElementById('operand').value;
   document.getElementById('operand').value="";
   document.getElementById('equlvalent').value=1;

}


function allclear(){
    document.getElementById('result').value=0;
    document.getElementById('operand').value="";
    document.getElementById('operation').value=0;
  document.getElementById('equlvalent').value=1;

}
function plusminus(){
    let x=parseFloat(document.getElementById('result').value);

    x *=-1;
    document.getElementById('result').value=x;
}
function percent(){
    let x=parseFloat(document.getElementById('result').value);

    x*=0.01;
    document.getElementById('result').value=x;

}
function square(){
    
   let x=parseFloat(document.getElementById('result').value);
    x*=x;
   document.getElementById('result').value=x;

  
}
