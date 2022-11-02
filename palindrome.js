check palindrome(str){ 
let bag = " "
for(let i=str.length-1;i>=0;i--){ 
   bag+=str[i];
} 
return (str==bag) ;
} 

checkpalindrome(1221);