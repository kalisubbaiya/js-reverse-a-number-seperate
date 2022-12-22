let a=parseInt(prompt("Enter a number"));
let b;
for(i=1;a!=0;i++){
    b=a%10;
    console.log(b);
    a=Math.floor(a/10);   
}
