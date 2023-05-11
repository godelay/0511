// document.write('<p>Javascript는 재밌어:(</p>');

/* 변수 : 데이터를 담아 놓기 위해 이름표를 붙여놓은 공간*/

// 변수선언
var num;

// 변수 초기화
num = 10;

// 변수 선언 + 변수 초기화
var num = 10;
num = 20;

console.log(num);

//사용할 수 없는 변수명
// var 4you;

var price = 10000;
console.log(price);

var student = {
	grade: 1,
	school: "lion school"
};

console.log(student);
console.log(typeof(student));

//객체의 값 호출

var gradeInFo= student.grade;
console.log(gradeInFo);

//객체의 키 호출

var key = Object.keys(student)[0];
console.log(key);

//객체에 속성 추가 - 데이터 추가
student.class = 3;
console.log(student);

console.log(student['class']);
console.log(student.class);


//비어있는 객체
var teacher = new Object();
var teacher = {

};


