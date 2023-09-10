console.log("HEllo World!");
console.log("こんにちは")
console.log("I am learning JavaScript")
console.log(5+2)
console.log(6*2)
console.log(12/3)
console.log(5*7)
console.log("2+5")
const variable="代入する値"
console.log(variable)
// variable="更新しました"
console.log(variable)
const introduce=function(){
    console.log("こんにちは")
    console.log("POSSE太郎です！")
}

introduce();

const calculateTotalPrice=function(price,quantity){
    const TotalPrice=price*quantity
    console.log(TotalPrice);
}

calculateTotalPrice(200,3);

const number=15;

if (number>10){
    console.log("大きいです");
}else{
    console.log("小さいです")
}

const user="POSSE太郎";

if(user=="POSSE太郎"){
    console.log("正解です！！")
}else if(user=="POSSE次郎"){
    console.log("いまいちです！！")
}else{
    console.log("不正解です！！")
}

for(let number=1; number<=10; number++){
    console.log(number);
}

for(let number=5; number<=15; number++){
    console.log(number);
}

let about = document.getElementById('about');
console.log(about);

let title = document.getElementsByClassName('title-en');
console.log(title[1].innerHTML);

title.innerHTML='About Edited';

const hello = function(){
    console.log('こんにちは');
}

let title = document.querySelector('title-en');
text.innerHTML = 'About Edited';

const btn = document.getElementById('js-headerButton');

btn.addEventListener('click',hello);
