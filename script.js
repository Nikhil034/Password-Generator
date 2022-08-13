"use strict";

const GetTextBox=document.querySelector("#lengthPass");
const SubButton=document.querySelector("#sbbtn");

const GeneratePassword=function(){
   const TextLength=GetTextBox.value;
   const chars = "@#$0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
   let randomstring="";

   if(TextLength<0 || TextLength==0){
    swal('error',"Invalid length","error");
   }
   else if(TextLength>20 || TextLength<4){
    swal('warning',"Password Must be length 4 to 20! ","warning");
   }
   else{
      debugger;
      for (var i=0; i<TextLength; i++) {  
         let rnum = Math.floor(Math.random() * chars.length);  
         randomstring += chars.substring(rnum,rnum+1);  
     } 
    swal("success",`Here is your Password :- ${randomstring}`,"success");
   }
}

SubButton.addEventListener('click',GeneratePassword);