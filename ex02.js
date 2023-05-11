var name11 = "hi";
var name12 = "hi";
console.log(name11 == name12);

var name3 = Symbol("이테킷");
var name4 = Symbol("이테킷");
console.log(name3 == name4);

var myclass = {
    [Symbol("이테킷")]:1,
    [Symbol("이테킷")]:2
};

var c = 7;
console.log(++c);
console.log(c++);
console.log(c);


var d =2;
d =10;
console.log(d);

console.log(d += 3); //d=d+3

console.log(2 == 2);
console.log(2 == '2');

console.log(2 != 2);
console.log(2 != '2');   //True
console.log(2 !== '2');


var mbti = ['INFP','ENFJ','INTJ'];
console.log(mbti[0]); //INFP
console.log(mbti.length); //3

mbti[3] = 'ESFP' //추가
mbti[2] = 'ISTJ' //수정

//push()
mbti.push('ESFP','ISTJ'); //추가됨

//스프레드 문법
var newMbti = [...mbti,'ESFP','ISTJ'];
console.log(mbti);
console.log(newMbti);