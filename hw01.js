
var studentScore = prompt("점수를 입력하세요")
var grade;

if (100>=studentScore && studentScore>=0){
    if (studentScore>=90){
        n=10;
    } else if (studentScore>=80){
        n=9;
    } else {
        n=1;
    }
} else {
    n=0;
}

switch(n){
    case 10 :
        grade = 'A';
        break;
    case 9 :
        grade = 'B';
        break;
    case 7 :
        grade = 'C';
        break;
    default:
        grade = 'none'
}


console.log(`당신의 점수는 ${studentScore}이고, 학점은 ${grade}입니다`)


// switch(studentScore){
//     case studentScore >= 90 :
//         grade = 'A';
//         break;
//     case studentScore >= 90 :
//         grade = 'B';
//         break;
//     case studentScore >= 70 :
//         grade = 'C';
//         break;
//     default:
//         grade = 'none'
// }